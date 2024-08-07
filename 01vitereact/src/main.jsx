import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Chai from './chai.jsx'

const anotherElement = (
  <a href = 'https://google.com' target='_blank'>Visit Google !</a>
)

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom ReactApp Making</h1>
//     </div>
//   )
// }  React will parse this MyApp() function in the form of "reactElement" we can say as a tree, when we execute it !, but it will not  be able to execute the "reactElement" even after it is in the form which react will do is called "Parsed", means ke me react ka ek step bacha raha hun parse karne ka, why it will not work let's see in the movie further ! 🙂

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: 'Click me to Visit Google'
// }


//Let's give Global Scoped variable for better understanding, that why we use "EvaluatedExpression/{}", and put that variable into our already created reactElement (workable).
const anotherUser = "Chai aur Reacttteeee !"

const reactElement = React.createElement( //this element is created with the help of React's createElement() functions, not by ours. in which this element expects "object" from us.
  'a', // can be any tag 'div', 'h1', 'p' and many more etc.
  {href: 'https://google.com', target: '_blank'}, // here all the Attributes in the object format.
  'Click me to Visit Google', //here any text
  //The whole three terms are in the form of an object 1. 'a', 2. {attributes}, 3.'a simple text'
  anotherUser // trying to give the variable to the Element to learn the behind working of react for variables. It worked and the variable is combined with the link. as i was just practicing so it's OK but when using in future use it Optimizedly.
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // you can remove this part "<React.StrictMode>" whenever you want !
//  MyApp() <- still works, because it is only a function afterall
/* <MyApp /> <- this will also work */
/*reactElement*/ // output showing nothing but full of errors in 'Inpect'
/*ReactElement*/ // I've made the Capital 'R' as we have learnt before but still did not worked !, Again Full of Errors, then what it is the reason - The reason is that the react is expecting me to give it the function so it can parse and do the further process, but as I am giving something which will make it's work easy, I still not get the wanted(joytu hatu) output. One of the reason ye bhi hain ki "proper syntax" me nahi likha hua hain.  just Like "anotherElement", it's written perfectly.

// anotherElement see here I don't need to put "()/parenthesis" or this format "< />" it worked with just it's name !, because it had proper names and syntax.

reactElement // yes with proper syntax and with proper format it Worked 🥳 !

// {/* <App /> */}

)
