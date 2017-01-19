import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const students = [
  {name: "Wendy"},
  {name: "Bibi"},
  {name: "Ekaterina"},
  {name: "Dimitriy"},
  {name: "Parm"}
];

ReactDOM.render(
  <App students={students} nickName="Foreign Methods" />,
  document.getElementById('root')
);
