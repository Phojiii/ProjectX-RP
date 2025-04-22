export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { type, userDiscordId, discordUsername, answers } = req.body;

  const webhookUrl = "https://discord.com/api/webhooks/1363879251492733130/YUEJMlVb-ZIn1N0T6Gnp3gXzHwPNc9QyBdGS8W4DTudu1HC3Bc4B3YY9kHFQ2sufnV7B";

  const message = {
    content: `📝 New **${type} Application** submitted:\n\n**User:** ${discordUsername} (ID: ${userDiscordId})\n\n**Answers:**\n${Object.entries(answers).map(([q, a]) => `• **${q}**: ${a}`).join("\n")}`,
  };

  try {
    await fetch(webhookUrl, {
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
