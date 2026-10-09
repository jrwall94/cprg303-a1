import { Image, StyleSheet, View, ScrollView } from "react-native";

export function ShopContent() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require("../assets/images/bag.jpg")}
                        style={styles.photo}
                    />
                    <Image source={require("../assets/images/heels.jpg")}
                        style={styles.photo}
                    />
                </View>
                <View style={styles.container}>
                    <Image source={require("../assets/images/jacket.jpg")}
                        style={styles.photo}
                    />
                    <Image source={require("../assets/images/makeup.jpg")}
                        style={styles.photo}
                    />
                </View>
                <View style={styles.container}>
                    <Image source={require("../assets/images/sneakers.jpg")}
                        style={styles.photo}
                    />
                    <Image source={require("../assets/images/thread.jpg")}
                        style={styles.photo}
                    />
                </View>
                <View style={styles.container}>
                    <Image source={require("../assets/images/heels.jpg")}
                        style={styles.photo}
                    />
                    <Image source={require("../assets/images/jacket.jpg")}
                        style={styles.photo}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        width: '100%',
        flexDirection: "row",
    },
    photo: {
        width: '50%',
        height: 180,
    },
});
