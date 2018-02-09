import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { currencies } from '../Mocks/currencies';
import { containerStore } from '../Stores/containerStore';
import { observer } from 'mobx-react';
import { ResultLine } from './ResultLine';

const containerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#516393',
    margin: '0 auto',
    borderRadius: '10px'
};





export const Container = observer(() => {
    return (
        <div style={containerStyle}>


          
            <ResultLine />
        </div>
    );
});