const React = require('react');
const ReactDOM = require('react-dom');
import firebase, { reference, signIn } from './firebase';
import DailyBullet from './Components/DailyBullet';

ReactDOM.render(<DailyBullet />,
document.getElementById('application'));
