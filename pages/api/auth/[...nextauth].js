import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,  // Discord Client ID from .env.local
      clientSecret: process.env.DISCORD_CLIENT_SECRET,  // Discord Client Secret from .env.local
      redirectUri: "http://localhost:3000/api/auth/callback/discord",
    }),
  ],
  callbacks: {
    // Customizing the session object to include the Discord user ID
    async session({ session, token }) {
      session.user.id = token.sub;  // Add the Discord user ID to the session object
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',  // Optional: Add a custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET,  // Secret for NextAuth session
});
