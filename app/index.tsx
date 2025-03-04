import { Text, View } from "react-native";
import { styles } from "../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Link href="/notifications">
        <Text>Go to Notifications</Text>
      </Link>
    </View>
  );
}
