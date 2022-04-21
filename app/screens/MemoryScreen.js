import React, { useState } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import AppCard from '../components/AppCard';
import AppIcon from '../components/AppIcon';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';

const getMemory = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getMemories(user);
}

const getCategories = () => {
    let commonData = DataManager.getInstance();
    let categories = commonData.getCategories();

    return categories;
}

function MemoryScreen({ props }) {
    const memoryList = getMemory();
    const categoryList = getCategories();
    const [category, setCategory] = useState(); // filter values for categories

    const [refreshing, setRefreshing] = useState(false);
    const [memories, setMemories] = useState(memoryList);



    const handleDelete = (memory) => {
        console.log("deleting", memory);
        const newMemoryList = memories.filter(item => item.memoryid !== memory.memoryid);
        setMemories(newMemoryList);
        // console.log("new", newMemoryList[0])
    }

    return (
        <AppScreen>
            <AppText style={styles.tester}>My Memories</AppText>

            {/* Category filter */}
            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                data={categoryList}
                icon="apps"
                placeholder="Categories"
            />

            {/* Collections */}
            <FlatList
                style={styles.list}
                data={memories}
                keyExtractor={memory => memory.memoryid.toString()}
                refreshing={refreshing}
                onRefresh={() => setMemories(memories)}
                renderItem={({ item }) =>
                    <AppCard
                        id={item.memoryid}
                        title={item.title}
                        subtitle={item.subtitle}
                        // onPress={() => console.log(item)}
                        category={item.category}
                        onSwipeLeft={() => (
                            <View style={styles.deleteView}>
                                <TouchableOpacity onPress={() => handleDelete(item)}>
                                    <AppIcon name="trash-can" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor} />
                                </TouchableOpacity>
                            </View>)
                        }
                    />}
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