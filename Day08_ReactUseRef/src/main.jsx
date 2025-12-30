import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import VideoPlayer from './VideoPlayer.jsx'

createRoot(document.getElementById('root')).render(

    <>
    <h1>Components using useRef: Accessing and Manipulating the DOM</h1>
    <hr />
    <App />
    <hr />
    <Login />
    <VideoPlayer />
    </>
)
