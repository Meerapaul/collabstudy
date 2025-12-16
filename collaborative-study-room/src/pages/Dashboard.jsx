import CreateRoom from "../components/CreateRoom";
import RoomList from "../components/RoomList";

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <CreateRoom />
      <RoomList />
    </div>
  );
}

export default Dashboard;
