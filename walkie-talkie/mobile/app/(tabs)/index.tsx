import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { connectSocket, sendMessage } from "./../../lib/socket";

export default function App() {
  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Walkie-Talkie Mobile</Text>
      <Button title="Send Test Message" onPress={() => sendMessage("Hello from Mobile")} />
    </View>
  );
}
