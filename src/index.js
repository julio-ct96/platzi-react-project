import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import NewBadge from "./pages/NewBadge";

//const greetJSX = <h1>Hello World desde React</h1>;
//const greet = React.createElement('a',{href: 'https://www.google.com'},'Hola! Soy los Children');

const name = 'Julio';
/*
const greet = React.createElement(
    'h1',
    {},
    `Hola soy ${name}`
)
 */
//const greetJSX = <h1>Hola, soy {name}</h1>
//const greetJSX = <h1>Hola, soy {__expresiones__}</h1>

const greetJSX = (
    <div>
        <h1>Hola soy {name}</h1>
        <p>Estoy probando con React JSX</p>
    </div>
);

const greet = React.createElement(
    'div',
    {},
    React.createElement(
        'h1',
        {},
        `Hola soy ${name}`
    ),
    React.createElement(
        'p',
        {},
        'Estoy probando con React sin JSX'
    )
)

const container = document.getElementById('root');

//ReactDOM.render(__que__, __donde__)
ReactDOM.render(<NewBadge firstName="Julio"
                       lastName="Saura"
                       jobTitle="Frontend Developer"
                       instagram="@jvlitrxs"
                       hastag="NeverStopLearning"/>, container);
