import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    color: "#100d0d",
  },
  via: {
    fontSize: 12,
    color: "#888",
  },
  image: {
    width: "100%",
    height: 320,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  actionsLeft: {
    flexDirection: "row",
    gap: 16,
  },
  likes: {
    paddingHorizontal: 12,
    paddingTop: 8,
    fontWeight: "bold",
  },
  caption: {
    paddingHorizontal: 12,
    paddingTop: 6,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default s;
