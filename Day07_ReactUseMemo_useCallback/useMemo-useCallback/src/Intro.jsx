import React from "react";

const Intro = React.memo(({value})=> {
    return (
        <>
        <h1>Hello! My name is {value.name} and I'm {value.age} years old</h1>
        </>
    )
})
export default Intro;