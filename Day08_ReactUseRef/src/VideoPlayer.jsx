import { useRef } from "react";

function VideoPlayer() {
    const videoRef = useRef(null);

    function startFun() {
        videoRef.current.play();
    }
    function pauseFun() {
        videoRef.current.pause();
    }
    function restartFun() {
        videoRef.current.currentTime = 0;
    }
    function backword() {
        videoRef.current.currentTime = videoRef.current.currentTime-10
    }
    function forword() {
        videoRef.current.currentTime = videoRef.current.currentTime + 10;
    }
    return (
        <>
        <video ref={videoRef} src="/IBelieve.mp4" width="500" height="400" ></video>
        <div>
            <button onClick={backword}>← 10 sec Backword</button>
            <button onClick={startFun}>Start</button>
            <button onClick={pauseFun}>Pause</button>
            <button onClick={restartFun}>Restart</button>
            <button onClick={forword}>10 sec Forword →</button>
        </div>
        </>
    )
}
export default VideoPlayer;