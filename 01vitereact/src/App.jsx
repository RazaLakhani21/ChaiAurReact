import Chai from "./chai"

function App() {
  return (
    <>
   <Chai />
    <h1>Hello World !</h1>
    <h2> running this in one element of App function`</h2>
    </>
  )
}

export default App

// To run the content of chai in the app's function we've to remove the maal-masala of the App(), or else it would have given me error. It comes under the rule of jsx - that I can only run one Element.

// So to run multiple element in it, I can make a "div" like this -> 
// '<div> 
    //<Chai />
    // <h1>Hello World !</h1>
    // <h2> running this in one element of App function`</h2> 
    //</div>'


    // not to make it so long, you can also type like this, as it will also work ->
    // <> 
    // <Chai />
    // <h1>Hello World !</h1>
    // <h2> running this in one element of App function`</h2>
    // </>