const React = require('react');
const ReactDOM = require('react-dom');
import firebase, { reference, signIn } from './firebase';
<<<<<<< HEAD
import DailyBullet from './Components/DailyBullet';
require('../scss/Index')
=======
import Main from './Components/Main';
import styles from './styles.scss';
>>>>>>> e599fc8158de769744594190bedd48030ae2af5d

ReactDOM.render(<Main />,
document.getElementById('application'));
