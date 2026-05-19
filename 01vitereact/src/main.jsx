import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// };

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const anotherUser = "chai aur react"
const reactElement =  React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDom.createRoot(document.getElementById('root')).render(
    reactElement
 
)
