import * as React from 'react';
import {Input, Dropdown} from 'semantic-ui-react';
import { currencies } from '../Mocks/currencies';

const containerStyle = {
    width: '400px',
    height: '100%',
    backgroundColor: 'grey',
    margin: '0 auto'
};

export const Container = () => (
    <div style={containerStyle}>
        <Input type='number' placeholder='100' />
        <Dropdown placeholder='From' fluid selection options={currencies} />
        <Dropdown placeholder='To' fluid selection options={currencies} />
    </div>
);