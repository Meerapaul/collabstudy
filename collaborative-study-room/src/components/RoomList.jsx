import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

function RoomList() {
  const { user } = useAuth();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "rooms"),
      where("members", "array-contains", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const roomData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(roomData);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Your Study Rooms</h2>

      {rooms.length === 0 && <p>No rooms joined yet.</p>}

      {rooms.map((room) => (
        <div
          key={room.id}
          className="border p-3 rounded mb-2 bg-white"
        >
          <h3 className="font-bold">{room.name}</h3>
          <p className="text-sm text-gray-500">
            Room ID: {room.id}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RoomList;
