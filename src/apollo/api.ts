import {gql} from "apollo-boost"
import {_allReservationsQuery} from './queries'
import {_createReservationMutation} from './mutations';

export const URI = "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev";

export const API = {
    _allReservationsQuery,
    _createReservationMutation
};
