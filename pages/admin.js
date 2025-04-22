import dbConnect from "@/lib/mongodb";
import Application from "@/models/Application";

export async function getServerSideProps() {
  await dbConnect();
  const apps = await Application.find().sort({ submittedAt: -1 }).lean();
  return { props: { apps: JSON.parse(JSON.stringify(apps)) } };
}

export default function Admin({ apps }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Type</th>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Answers</th>
            <th className="p-2 border">Submitted</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 border">{app.type}</td>
              <td className="p-2 border">{app.discordUsername}</td>
              <td className="p-2 border">
                {Object.entries(app.answers).map(([key, val]) => (
                  <div key={key}><strong>{key}:</strong> {val}</div>
                ))}
              </td>
              <td className="p-2 border">{new Date(app.submittedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
