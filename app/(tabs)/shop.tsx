import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { SearchBar } from "../../components/SearchBar";
import { ShopContent } from "../../components/ShopContent";

export default function ShopScreen () {
    return(
        <SafeAreaProvider style={{ flex: 1 }}>
            <SearchBar></SearchBar>
            <ShopContent></ShopContent>
        </SafeAreaProvider>
    );
};
