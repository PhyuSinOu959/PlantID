import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import images from "../src/assets/images";

const listData = [
    {
        id: 1,
        imageUri: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'Cactus'
    }
]

const renderItem = (item) => {
    return(
    <TouchableHighlight
        onPress={() => onClickFlatListItem && onClickFlatListItem(item)}
        style={styles.rowFront}
        underlayColor={colors.currenTransBg}
    >
        <View>
            <View cls=" flx-row aic ph-10 pv-12" >
                <Image source={images.plant} style={styles.image} />
                <Text cls="f-16 ff-regular black ml-20 jcc aic">{item.name}</Text>
            </View>
        </View>
    </TouchableHighlight>
    );
}


const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Text>This is Home Screen. </Text>
            <Icon name="rocket" size={30} color="#900" /> */}
            <FlatList
                data={listData}
                renderItem={(item) => this.renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC2C7',
    }
})