// We Must Import the React Library
import React from "react";


// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const GiphyDisplay = (props) => {
    const {giphy} = props;

    const loaded = () => {
        return (
            <img src={giphy.data.images.original.url} />
        );
    }
    const loading = () => {
        return <h1> Click Button NOWWWWWW 🤬 </h1>
    }

    return giphy ? loaded() : loading ();
};

export default GiphyDisplay;