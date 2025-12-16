import JoinRoom from "../components/JoinRoom";
import CreateRoom from "../components/CreateRoom"; // <--- ADDED THIS
import RoomList from "../components/RoomList";     // <--- ADDED THIS

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Grid layout to organize the components nicely */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <CreateRoom />
          <JoinRoom />
        </div>
        <div>
          <RoomList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;