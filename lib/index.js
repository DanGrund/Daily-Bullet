const React = require('react');
const ReactDOM = require('react-dom');
import firebase, { reference, signIn } from './firebase';
require('../scss/Index')
import Main from './Components/Main';

ReactDOM.render(<Main />,
document.getElementById('application'));
