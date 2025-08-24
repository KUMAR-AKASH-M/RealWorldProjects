"use client";
import { useEffect } from "react";
import { connectSocket, sendMessage} from "../lib/socket";

export default function Home() {
  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <>
    <div className="p-6">
      <h1 className="text-3xl font-bold">Walkie Talkie Web</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      onClick={() => sendMessage("Hello from Web")}
      >
        Send Message
      </button>

    </div>
    </>
  );
}
