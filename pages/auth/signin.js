import { getProviders, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SignIn({ providers }) {
  const router = useRouter();
  const callbackUrl = router.query.callbackUrl || '/';

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="bg-slate-800 text-slate-100 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-4">🔒 Login Required</h1>
        <p className="text-slate-400 mb-6">You must be logged in to join a team.</p>

        <div className="space-y-4">
          {Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              onClick={() => signIn(provider.id, { callbackUrl })}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 rounded-md"
            >
              Sign in with {provider.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
