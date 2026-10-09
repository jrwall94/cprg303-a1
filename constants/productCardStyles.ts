// File Location: constants/productCardStyles.ts

import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  card: {
    width: "50%",
    padding: 8,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  name: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#100d0d",
  },
  priceRow: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
    color: "#184ce7",
  },
});

export default s;
