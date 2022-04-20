import React, { useState } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import AppCard from '../components/AppCard';
import AppIcon from '../components/AppIcon';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';

const categories = [
    { label: "L1", value: 1, icon: "airplane-takeoff", backgroundColor: "red" },
    { label: "L2", value: 2, icon: "ghost", backgroundColor: "blue" },
    { label: "L3", value: 3, icon: "flash", backgroundColor: "green" },
];

const getMemory = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getMemories(user);
}

function MemoryScreen(props) {
    const memoryList = getMemory();

    const [category, setCategory] = useState(); // filter values for categories

    const [refreshing, setRefreshing] = useState(false);
    const [memories, setMemories] = useState(memoryList);

    const handleDelete = (memory) => {
        const newMemoryList = memories.filter(item => item.memoryid !== memory.memoryid);
        setMemories(newMemoryList);
    }

    return (
        <AppScreen>
            <AppText style={styles.tester}>My Memories</AppText>
            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                data={categories}
                icon="apps"
                placeholder="Categories" />

            <FlatList
                style={styles.list}
                data={memoryList}
                keyExtractor={memory => memory.memoryid.toString()}
                refreshing={refreshing}
                onRefresh={() => setMemories(memoryList)}
                renderItem={({ item }) =>
                    <AppCard
                        title={item.title}
                        subtitle={item.subtitle}
                        onPress={() => console.log(item)}
                        onSwipeLeft={() => (
                            <View style={styles.deleteView}>
                                <TouchableOpacity onPress={() => handleDelete(item)}>
                                    <AppIcon name="trash-can" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor} />
                                </TouchableOpacity>
                            </View>)} />}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primaryColor,
        flex: 1,
    },
    tester: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    deleteView: {
        backgroundColor: "red",
        width: 100,
        height: 250,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    list: {
        // backgroundColor: 'blue'
        marginBottom: 100,
    }
})
export default MemoryScreen;