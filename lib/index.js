const React = require('react');
const ReactDOM = require('react-dom');
import firebase, { reference, signIn } from './firebase';
import Main from './Components/Main';
import styles from './styles.scss';

ReactDOM.render(<Main />,
document.getElementById('application'));
