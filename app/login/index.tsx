import { useNavigation } from "expo-router";
import Login from "../../components/login/login";
import { useEffect } from "react";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return <Login />;
}
