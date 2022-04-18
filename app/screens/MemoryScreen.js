import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AppCard from '../components/AppCard';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';

const memoryData = [
    {
        id: 1,
        title: "deez nuts",
        subtitle: "rick roll",
    },
    {
        id: 2,
        title: "joe mama",
        subtitle: "ok"
    }
]

const categories = [
    { label: "L1", value: 1, icon: "airplane-takeoff", backgroundColor: "red" },
    { label: "L2", value: 2, icon: "ghost", backgroundColor: "blue" },
    { label: "L3", value: 3, icon: "flash", backgroundColor: "green" },
];

function MemoryScreen(props) {
    const [category, setCategory] = useState();
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
                data={memoryData}
                keyExtractor={memory => memory.id.toString()}
                renderItem={
                    ({ item }) => <AppCard title={item.title} subtitle={item.subtitle} />} />

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
    }
})
export default MemoryScreen;