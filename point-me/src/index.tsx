import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
// tslint:no-submodule-imports
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
