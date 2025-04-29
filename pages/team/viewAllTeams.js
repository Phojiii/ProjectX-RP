import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const adminRole = process.env.NEXT_PUBLIC_ADMIN_ROLE_ID;

  if (!session || !session.user.roles?.includes(adminRole)) {
    return {
      redirect: {
        destination: "/unauthorized", // Create this page to show error
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default function ViewAllTeams({ session }) {
  return (
    <div className="text-black p-6">
      <h1 className="text-3xl mb-4">All Teams (Admin Access)</h1>
      {/* Render the teams here */}
    </div>
  );
}
