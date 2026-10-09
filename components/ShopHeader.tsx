import { Platform, StyleSheet, Text, View} from "react-native";
import { SymbolView } from "expo-symbols";

export function ShopHeader() {
    return(
        <View style={[styles.header]}>
            <Text style={[styles.text]}>Shop</Text>
            <View style={[styles.container]}>
                <View style={[styles.symbol]}>
                    <SymbolView
                        name={{
                            ios: "bookmark",
                            android: "bookmark",
                            web: "bookmark",
                        }}
                        size={Platform.select({ ios: 25, android: 35, web: 35 })}
                        tintColor="black"
                />
                </View>
                <View style={[styles.symbol]}>
                    <SymbolView
                        name={{
                            ios: "line.horizontal.3",
                            android: "menu",
                            web: "menu",
                        }}
                        size={Platform.select({ ios: 25, android: 35, web: 35 })}
                        tintColor="black"
                />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        paddingLeft: 5,
        paddingTop: 35,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        alignItems: "center",
        marginRight: 20,
        flexDirection: "row",
        marginTop: 5,
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
        padding: 10,
    },
    symbol: {
        marginLeft: 15,
    },
});