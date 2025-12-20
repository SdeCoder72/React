import { useEffect, useState } from "react"

function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [show, setShow] = useState(true);
    useEffect(()=>{

        if(!show) return;

        const changeTime = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
            console.log("Hello");
        }, 1000);

        return ()=>{
            clearInterval(changeTime)
        }

    }, [show])

    return (
        <>
        <button onClick={()=> setShow(!show)}>{show? "Hide":"Show"}</button>
        {
            show && <h2>Clock: {time}</h2>
        }
        </>
    )
}

export default Clock;