import React, {ReactNode} from 'react';
import {Query} from 'react-apollo'
import {View, Text} from 'react-native'
// @ts-ignore
import {API} from "apollo/api";

type Data = {
    reservations: Array<{ id: string; name: string; hotelName: string }>
}
type Props = {
    children: ReactNode
}

const QueryReservations = (props: Props) =>
    <Query<Data> query={API._allReservationsQuery()}>
        {({loading, error, data}) => {
            // @ts-ignore
            const children = React.Children.map(props.children, child => React.cloneElement(child, {
                data: data,
                loading: loading,
                error: error
            }));

            if (loading) return <Text>"Loading..."</Text>;
            if (error) return <Text>`Error! ${error.message}`</Text>;
            return children
        }}
    </Query>;

export default QueryReservations