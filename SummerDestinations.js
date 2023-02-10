import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const summerDestinationsItem = ({ item }) => (
<View style={styles.summer_destinations_item}>
<Image
    style={styles.destination_icon}
    source={{uri: item.destination_icon}}
   />
<Image
    style={styles.menu_icon}
    source={{uri: item.menu_icon}}
   />
<Text style={styles.destination}>{item.destination}</Text>
</View>
  );

const SummerDestinations = ({ item }) => (
<FlatList
    style={styles.summer_destinations}
    data={item}
    renderItem={summerDestinationsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default SummerDestinations;

const styles = StyleSheet.create({
    'destination_icon': {
        'width': '6vw',
        'height': '6vw',
        'margin': 5
    },
    'menu_icon': {
        'width': '2vw',
        'height': '8vw',
        'margin': 5
    },
    'destination': {
        'color': '#030202',
        'fontSize': 15,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});