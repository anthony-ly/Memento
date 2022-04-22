import React, { useState } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';

import AppCard from '../components/AppCard';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';

import DataManager from '../config/DataManager';

/**
 * 
 * @returns memory data from DataManager
 */
const getMemory = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getMemories(user);
}

/**
 * 
 * @returns category data from DataManager
 */
const getCategories = () => {
    let commonData = DataManager.getInstance();
    let categories = commonData.getCategories();

    return categories;
}

function MemoryScreen({ navigation }) {
    //  variables containing the data from DataManager
    const memoryList = getMemory();
    const categoryList = getCategories();
    const [category, setCategory] = useState();

    // useState variables
    const [refreshing, setRefreshing] = useState(false);
    const [memories, setMemories] = useState(memoryList);


    /**
     * 
     * @param memory - memory to be removed
     * removes memory from the memory data
     */
    const handleDelete = (memory) => {
        let commonData = DataManager.getInstance();

        // filter the memory data to not contain the removed memory
        const newMemoryList = memories.filter(item => item.memoryid !== memory.memoryid); // instead of deleting from memorylist

        // assign the new memory list to the DataManager
        commonData.removeMemory(newMemoryList);

        // set the state
        setMemories(newMemoryList);

    }

    // checks if the screen is in focus, if it is, get the latest memory values from DataManager
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setMemories(getMemory());

        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, []);

    return (
        <AppScreen>
            <AppText style={styles.tester}>My Memories</AppText>

            {/* Category filter */}
            <AppPicker
                selectedItem={category}
                onSelectItem={item => {
                    setCategory(item)
                    // set memories to only show those that have the same category
                    let commonData = DataManager.getInstance();
                    setMemories(commonData.filterMemory(item.label, commonData.getUserID()));
                }}
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
                extraData={memories}
                renderItem={({ item }) =>
                    <AppCard
                        id={item.memoryid}
                        title={item.title}
                        subtitle={item.subtitle}
                        image={item.image}
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