import React from "react";
import {
  render
} from "react-dom";
import './style.css';
import Application from './Application';


import Amplify from 'aws-amplify';
import configuration from './aws-exports';

Amplify.configure(configuration);

ReactDOM.render( < Application / > , document.getElementById('root'));