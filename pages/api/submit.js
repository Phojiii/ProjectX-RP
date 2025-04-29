export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { type, userDiscordId, discordUsername, answers } = req.body;

  // Your separate webhook URLs
  const webhookUrlLSPD = "https://discord.com/api/webhooks/1366146029740884139/3EyT0SQppQyuZPt-r84CJVTkPqLKxAWZpXysnrB-bB2u1h4rpGqmHv2Tog97AFFmijjv";
  const webhookUrlEMS = "https://discord.com/api/webhooks/1366149866308374590/2pSwCJNx-MjMMw8upKKhfOQQ7Qi2ZomMxiyxOEXcWDNSeqBi3_FbdJybLmY66meIyoVI";

  let selectedWebhook = null;

  // Decide which webhook to use based on type
  if (type.toLowerCase() === "lspd") {
    selectedWebhook = webhookUrlLSPD;
  } else if (type.toLowerCase() === "ems") {
    selectedWebhook = webhookUrlEMS;
  } else {
    return res.status(400).json({ message: "Invalid application type" });
  }

  const message = {
    content: `📝 New **${type} Application** submitted:\n\n**User:** ${discordUsername} (ID: ${userDiscordId})\n\n**Answers:**\n${Object.entries(answers).map(([q, a]) => `• **${q}**: ${a}`).join("\n")}`,
  };

  try {
    await fetch(selectedWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    res.status(200).json({ message: "Submitted and sent to Discord" });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ message: "Failed to send to Discord" });
  }
}
