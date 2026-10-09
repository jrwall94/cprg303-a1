import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { SymbolView } from "expo-symbols";

export function SearchBar() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.searchContainer]}>
                <SymbolView
                name={{
                    ios: "magnifyingglass",
                    android: "search",
                    web: "search",
                }}
                size={Platform.select({ ios: 30, android: 40, web: 40 })}
                tintColor="grey"
                />
                <Text style={[styles.barText]}>Search</Text>
            </View>

            <ScrollView horizontal>
            <View style={[styles.tabRow]}>
                <View style={[styles.searchTab]}>
                    <Text style={[styles.tabText]}>Shops</Text>
                </View>
                <View style={[styles.searchTab]}>
                    <Text style={[styles.tabText]}>Videos</Text>
                </View>
                <View style={[styles.searchTab]}>
                    <Text style={[styles.tabText]}>Editors' picks</Text>
                </View>
                <View style={[styles.searchTab]}>
                    <Text style={[styles.tabText]}>Collections</Text>
                </View>
                <View style={[styles.searchTab]}>
                    <Text style={[styles.tabText]}>Featured</Text>
                </View>
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        paddingBottom: 15,
        alignItems: "center",
        backgroundColor: "white",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 45,
        width: "90%",
        marginBottom: 15,
        backgroundColor: "#eeeeee",
        borderRadius: 12,
        paddingLeft: 5,
    },
    searchTab: {
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: "#eeeeee",
        borderRadius: 12,
    },
    tabRow: {
        flexDirection: "row",
        marginHorizontal: 15,
        height: 38,
    },
    tabText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    barText: {
        marginLeft: 5,
        fontSize: 19,
        color: "grey",
    },
});