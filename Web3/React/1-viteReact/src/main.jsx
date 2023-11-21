import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


//////////*********(Doesn't work), render expects a function or object with props' syntax defined in library.************

////// const ReactElement = {
// ////    type: 'a',
//////     props: {
//////         href: 'https://google.com',
//////         target: '_blank'
//////     },
//////     children: 'Click me to visit google'
////// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
) //////////(works), testing if directly passing element directly works for render (as other functions return DOM to render behind the scene) as directly passing object didn't work like above ReactElement... 



const anotherUser = " | I AM ANISH..."

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser ///just for testing parameters
) //////////(works) Checking if creating and passing element as per react syntax works.

ReactDOM.createRoot(document.getElementById('root')).render(

  // <MyApp /> //////testing if function can be returned from same rendering file. (works, but mostly use App.jsx)
  // <App />
  // anotherElement
  reactElement

)

