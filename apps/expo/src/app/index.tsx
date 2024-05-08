import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { api, setToken } from "~/utils/api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Index() {
  const [token, setLocalToken] = useState("");

  const postQuery = api.post.all.useQuery();

  const handleLogin = () => {
    axios
      .post("http://localhost:3000/api/auth/login", {
        email: "admin@ithivesolutions.com",
        password: "User@123$.",
      })
      .then((res) => setLocalToken(res.data.token));
  };

  let text = "";

  const handleTest = () => {
    axios
      .get("http://localhost:3000/api/test", {
        headers: { Authorization: token },
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView className=" bg-background">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full bg-background p-4">
        <Text>{JSON.stringify(postQuery.data)}</Text>

        <Text className="color-red-500 text-2xl text-center mt-10">
          {token ? "Logged In" : "Not Logged In"}
        </Text>

        <Button title="Login" onPress={handleLogin} />
        <Button title="Test" onPress={handleTest} />

        <Text>{text}</Text>
      </View>
    </SafeAreaView>
  );
}
