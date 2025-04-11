import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Test from "./test";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Interval name="Malaika" age='90'/> */}
    <Test name="Malaika" age='90'/>
  </StrictMode>,
)