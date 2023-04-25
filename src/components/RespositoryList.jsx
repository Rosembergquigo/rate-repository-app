import React from 'react'
import {FlatList, Text } from 'react-native'
import respositories from '../../data/respositories.js'
import RepositoryItem from './RepositoryItem.jsx'

const RepositoryList = () => {
    return (
        <FlatList 
            data={respositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item : repo}) => (
                <RepositoryItem { ...repo} />
            )}
        />
    )
    
}

export default RepositoryList