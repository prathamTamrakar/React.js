import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {
  return (
    <div>Custom React</div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit '
// }

const AnotherElement = (
  <a href="https://google.com">Visit Google</a>
)

const ReactElement = React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank'
  },
  'Click me to visit google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyApp /> */}
    {AnotherElement}
    <br />
    {ReactElement}
    {/* {App()} */}
  </StrictMode>
)
