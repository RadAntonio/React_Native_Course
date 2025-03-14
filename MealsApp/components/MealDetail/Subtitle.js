import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b486",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b486",
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
