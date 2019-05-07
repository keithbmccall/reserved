import {gql} from "apollo-boost";


type CreateReservationData = {
    $name: String
    $hotelName: String
    $arrivalDate: String
    $departureDate: String
}
export const _createReservationMutation = (data: CreateReservationData) => gql`
    mutation {
        createReservation(
            data: {
                name: "${data.$name}"
                hotelName: "${data.$hotelName}"
                arrivalDate: "${data.$arrivalDate}"
                departureDate: "${data.$departureDate}"
            }
        )
        {
            id
            name
            hotelName
            arrivalDate
            departureDate
        }
    }
`;
