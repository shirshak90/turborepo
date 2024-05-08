import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { api } from "~/utils/api";

export default function Index() {
  const postQuery = api.post.all.useQuery();
  const authQuery = api.auth.login.useMutation();

  const handleLogin = () => {
    authQuery.mutate(
      {
        email: "admin@ithivesolutions.com",
        password: "User@123$.",
      },
      {
        onSuccess(data, variables, context) {
          console.log(data);
        },
        onError(error, variables, context) {
          console.log(error.data);
        },
      }
    );
  };

  return (
    <SafeAreaView className=" bg-background">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full bg-background p-4">
        <Text>{JSON.stringify(postQuery.data)}</Text>

        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}
