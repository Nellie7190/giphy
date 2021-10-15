//import React, {useState} from 'react';

//Define a function that is our component, always make sure to declare the props parameter so you can use props in your component

const Button = (props) => {

        return (
            <div>
                <button onClick={props.Giphy}>😄Get A Giphy😄 </button>
                {/* <img src={handleChange} alt="random giphy" /> */}
            </div>
        );
    };


export default Button;
