import * as React from 'react';
import './App.css';
import { Container } from './Views/Container';

export class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to PointMe!</h1>
        </header>
        <Container />
      </div>
    );
  }
}

