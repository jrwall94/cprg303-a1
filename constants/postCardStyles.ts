import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
    color: "#100d0d",
  },
  image: {
    width: "100%",
    height: 280,
  },
  actions: {
    flexDirection: "row",
    gap: 14,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  iconBtn: {
    padding: 4,
  },
  likes: {
    paddingHorizontal: 12,
    paddingTop: 6,
    fontWeight: "bold",
  },
  caption: {
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 8,
  },
});

export default s;
