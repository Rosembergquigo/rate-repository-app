import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
   text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.font.main,
    fontWeight: theme.fontWeigths.normal
   },
   colorPrimary:{
    color: theme.colors.textPrimary
   },
   colorSecundary: {
    color: theme.colors.textSecundary
   },
   bold:{
    fontWeight: theme.fontWeigths.bold
   },
   
   subHeading:{
    fontSize:theme.fontSizes.subHeading
   },
   small:{
    fontSize:10
   },
   textAlignCenter:{
    textAlign: 'center'
   }

})

export default function StyledText ({align, color, children, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        //a && b: si a es un props recibido , se aplica el estilo, so no se recibe , no se define
        align === 'center' && styles.textAlignCenter,
        color ==='primary' && styles.colorPrimary,
        color ==='secundary' && styles.colorSecundary,
        fontSize === 'subheading' && styles.subHeading,
        fontWeight === 'bold' && styles.bold
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}