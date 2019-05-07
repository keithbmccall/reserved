import React from 'react';
import {View, Text} from "react-native";
// @ts-ignore
import {Layout} from "shared/containers";


type Props = {}

type State = {
    reservations: Array<object>
}


export default class ReservationScreen extends React.Component<Props, State> {
    state: State = {
        reservations: [{}, {}]
    }

    render() {
        return (
            <Layout>
                <View>
                    Hello!
                </View>
            </Layout>
        )
    }


}