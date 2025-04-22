export default function Admin() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-700 mb-4">
        This version of the admin dashboard does not display application data,
        as submissions are sent directly to Discord instead of being stored in a database.
      </p>
      <div className="border p-4 rounded bg-gray-50">
        <p>To review submitted applications, please check the designated Discord channel.</p>
      </div>
    </div>
  );
}
