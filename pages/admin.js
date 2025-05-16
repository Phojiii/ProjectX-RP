import { getSession } from "next-auth/react";
import { getUserRoles } from "../utils/getUserRoles";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome Admin!</h1>
      <p>You have permission to view this page.</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login", // Redirect to login page
        permanent: false,
      },
    };
  }

  const guildId = process.env.DISCORD_GUILD_ID; // Your server ID
  const adminRoleId = process.env.ADMIN_ROLE_ID; // Role ID of Admins
  
  const userRoles = await getUserRoles(session.accessToken, guildId);

  if (!userRoles.includes(adminRoleId)) {
    return {
      redirect: {
        destination: "/unauthorized", // No permission
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
