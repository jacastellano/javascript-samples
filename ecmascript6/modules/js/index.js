import React from 'react';
import ReactDOM from 'react-dom';

// import multiply function
import { multiply } from './sample';

// import default function
import $ from './sample';

const ShowSum = props => 
  <span>
    {props.a} * {props.b} = {multiply(props.a, props.b)}
  </span>;

ReactDOM.render(
	<p><ShowSum a={3} b={4} /></p>,
  document.getElementById("root")
);

$.log("Default function example");
