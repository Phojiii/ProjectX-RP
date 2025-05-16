import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { teamId } = req.query; // teamId will come from URL like ?teamId=xxxx

  try {
    const { db } = await connectToDatabase();
    const team = await db.collection("teams").findOne({ teamId });

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
