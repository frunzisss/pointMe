import * as React from 'react';
import './App.css';
import { MainContainer } from './Views/MainContainer';
import { containerStore } from './Stores/containerStore';

export class App extends React.Component {
  public render() {
    containerStore.makeRequest();
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Currency Converter</h1>
        </header>
        <MainContainer />
      </div>
    );
  }
}

