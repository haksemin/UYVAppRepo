import React from 'react';
import { View } from 'react-native';
import CardBagis from './CardBagis';

const DonateItemsList = ({ items }) => (
    <View>
        {items?.map((item, index) => (
            <CardBagis key={index} item={item} />
        ))}
    </View>
);

export default DonateItemsList;
