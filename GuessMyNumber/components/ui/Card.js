import { StyleSheet, View } from "react-native";

function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.36,
        padding: 16,
        backgroundColor: "#4e0329",
      },
});