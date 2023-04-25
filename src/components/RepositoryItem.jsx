import React from "react"
import { View, Text, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import RepositoryStats from "./RepositoryStats"

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    }
})

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>Nombre: {props.fullName}</StyledText>
        <StyledText >Desacripción: {props.description}</StyledText>
        <StyledText >Lenguaje: {props.languaje}</StyledText>
        <StyledText>Forsk: {props.forksCount}</StyledText>
        <RepositoryStats {...props}/>
        <StyledText>Avatar: {props.ownerAvatarUrl}</StyledText>
    </View>
)

export default RepositoryItem