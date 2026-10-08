// File Location: constants/reelsStyles.ts

import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 48,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  reel: {
    height: 560,
    marginBottom: 12,
    backgroundColor: "#111",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  meta: {
    flex: 1,
    marginRight: 16,
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
  caption: {
    color: "#fff",
    fontSize: 14,
  },
  sideIcons: {
    alignItems: "center",
    gap: 18,
  },
});

export default s;
