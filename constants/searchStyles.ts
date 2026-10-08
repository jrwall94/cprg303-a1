import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 48,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 8,
    padding: 10,
  },
});

export default s;
