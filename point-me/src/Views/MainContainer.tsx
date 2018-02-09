import * as React from 'react';
import { Container } from './Container';

const mainContainerStyle = {
    height: '100%',
    width: '100%',
    backgroundColor: '#7C8AB1',
    padding: '50px'
};

export const MainContainer = () => (
    <div style={mainContainerStyle}>
        <Container />
    </div>
);
