import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import axios from "axios";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: "https://discord.com/oauth2/authorize?scope=identify%20email%20guilds%20guilds.members.read",
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      if (token?.sub) {
        try {
          const guildId = process.env.DISCORD_GUILD_ID;
          const botToken = process.env.DISCORD_BOT_TOKEN;
          const res = await axios.get(
            `https://discord.com/api/v10/guilds/${guildId}/members/${token.sub}`,
            {
              headers: {
                Authorization: `Bot ${botToken}`,
              },
            }
          );
          // ✅ Store user roles from Discord in token
          token.roles = res.data.roles || [];
        } catch (error) {
          console.error("Error fetching Discord roles:", error.response?.data || error.message);
          token.roles = [];
        }
      }

      return token;
    },

    async session({ session, token }) {
      // ✅ Attach roles directly to `session.user` for easy client access
      session.user.id = token.sub;
      session.user.roles = token.roles || [];
      session.accessToken = token.accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
});
