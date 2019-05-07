import ReservationScreen from '../ReservationScreen';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {View, Text} from 'react-native';

const createTestProps = (props: Object) => ({
    ...props
});

describe("ReservationScreen", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<ReservationScreen {...props} />);
        });

        it("should render a <View />", () => {
            expect(wrapper.find(View)).toHaveLength(1);
        });
    });
});