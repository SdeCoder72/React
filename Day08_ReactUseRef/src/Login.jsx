import {useRef, useState } from "react";

function Login() {

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    console.log("render");
    function sumbitFun(e) {
        e.preventDefault();
        
        console.log(emailRef.current.value , passwordRef.current.value);

    }
    return(
        <>
        <h1>Login Form</h1>
        <form onSubmit={sumbitFun}>
            <input type="email" ref={emailRef}/>
            <input type="password" ref={passwordRef}/>
            <button type="submit">Submit</button>
        </form>

        {/* when we are using useState hook */}
        {/* <form onSubmit={sumbitFun}>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form> */}

        </>
    )
}

export default Login;