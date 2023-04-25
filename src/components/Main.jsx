import React from 'react'
import { Text, View } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RespositoryList.jsx'

const Main = () => {
    return(
        //Constants.statusBarHeight permite bajar dinamicmamente para no que no se tenga problema con el header default de ios
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <Text> Rate Repository Application</Text>
            <RepositoryList />
        </View>
    )
}

export default Main