import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import SummerDestinations from './SummerDestinations'

const NeverthinkDestination = () => (
<ScrollView style={styles.neverthink_destination} showsVerticalScrollIndicator={false}>
<Image
    style={styles.top_image}
    source={{uri: item.top_image}}
    />
<Image
    style={styles.redirect_icon}
    source={{uri: item.redirect_icon}}
   />
<Text style={styles.destination_title}>{item.destination_title}</Text>
<Text style={styles.sub_title}>{item.sub_title}</Text>
<Image
    style={styles.heart_icon}
    source={{uri: item.heart_icon}}
   />
<SummerDestinations item={item.summer_destinations}/>
</ScrollView>
)

export default NeverthinkDestination;

const styles = StyleSheet.create({
    'top_image': {
        'width': '100vw',
        'height': '70vw',
        'backgroundColor': '#fcf6b0ff'
    },
    'redirect_icon': {
        'width': '6vw',
        'height': '6vw',
        'margin': 5
    },
    'destination_title': {
        'fontSize': 16,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#2d1e2fff'
    },
    'sub_title': {
        'color': '#8c8787',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'heart_icon': {
        'width': '6vw',
        'height': '6vw',
        'margin': 5
    }
});