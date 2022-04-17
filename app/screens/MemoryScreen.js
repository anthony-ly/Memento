import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
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

function MemoryScreen(props) {
    return (
        <AppScreen>
            {/* <AppCard
                title="deez"
                subtitle="nuts" /> */}
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
    }
})
export default MemoryScreen;