import React from 'react';
import { View } from 'react-native';
import CardBagis from './CardBagis';

const DonateItemsList = ({ items , cardpress}) => (
    <View>
        {items?.map((item, index) => (
            <CardBagis key={index} item={item} pressed={() => cardpress(item)}/>
        ))}
    </View>
);

export default DonateItemsList;
