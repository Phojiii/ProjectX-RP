import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  type: String,
  userDiscordId: String,
  discordUsername: String,
  answers: Object,
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);
