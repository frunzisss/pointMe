import * as React from 'react';
import { observer } from 'mobx-react';
import { containerStore } from './../Stores/containerStore';
import { Input, Dropdown } from 'semantic-ui-react';
import { currencies } from '../Mocks/currencies';

const resultLine = {
    color: 'white',
    fontWeigth: 'bold',
    padding: '30px 0px',
    display: 'inline-flex',
};

const amountStyle = {
    fontWeight: 'bold',
    height: '40px'
};

const fromStyle = {
    height: '40px',
};
const setAmount = (event: any, data: any) => {

    containerStore.updateAmount(data.value);
};

const setFrom = (event: React.SyntheticEvent<{}>, data: { value: string }) => {
    containerStore.updateFromC(data.value);
};


const setTo = (event: React.SyntheticEvent<{}>, data: { value: string }) => {
    containerStore.updateToC(data.value);
};

export const ResultLine = observer(() => (
    <div style={resultLine}>
        <Input
            onChange={setAmount}
            type='number'
            value={containerStore.getAmount()}
            placeholder='100'
            size='large'
            inverted
            style={amountStyle} />
        <Dropdown value={containerStore.fromC} onChange={setFrom} placeholder='From' fluid selection options={currencies} style={fromStyle} />
        <div>
            {` = ${containerStore.response}`}
            <Dropdown value={containerStore.toC} onChange={setTo} placeholder='To' fluid selection options={currencies} />
        </div>

    </div>
));