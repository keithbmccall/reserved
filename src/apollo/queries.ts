import {gql} from "apollo-boost";

export const _allReservationsQuery = () => gql`
    query _allReservationsQuery {
        reservations{
            id
            name
            hotelName
            arrivalDate
            departureDate
        }
    }
`;