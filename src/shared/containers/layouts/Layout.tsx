import React, {ReactNode} from 'react'
import {SafeAreaView} from 'react-navigation'
import {StyleSheet} from "react-native";
// @ts-ignore
import {colors} from 'shared/constants'


type Props = {
    children: ReactNode
}

const Layout = (props: Props) =>
    <SafeAreaView style={{...style.layoutWrapper}}>{props.children}</SafeAreaView>;

const style = StyleSheet.create({
    layoutWrapper: {
        flex: 1,
        backgroundColor: colors.layoutBackground,
    }
});

export default Layout;