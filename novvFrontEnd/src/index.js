// Common JS
//require('react');
//module.exports = {}
//export.varname = 24

// es6
import React from 'react';
import ReactDOM from 'react-dom';



var test = (a, b) =>{

}

const renderer = () =>{
    document.getElementById('normal').innerHTML = `<p>This is fucking test!</p> <input /><br/>${new Date().toLocaleTimeString()}`;
    ReactDOM.render(
        //1st Param what to render
        // the element to be created is html element
        React.createElement(
            'div', //1st) actual html element to be created
            null, //2nd) id, class haru dine (Properties aka in react props)
            'This div is created using react', // 3rd
    
            React.createElement('input', null, null),
            React.createElement('p', null, new Date().toLocaleTimeString())
        ),
        //2nd where to render
        document.getElementById('react')
    )
}

setInterval(renderer, 1000);