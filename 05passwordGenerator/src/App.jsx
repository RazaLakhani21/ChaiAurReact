import { useCallback, useRef, useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [specAllowed, setSpecAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (specAllowed) str += "!@#$%^&*()_+|-=/:'<>,.?[]{}`~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, specAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 9) //will select the value under that given range
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()}, [length, numAllowed, specAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center font-semibold">
          {" "}
          Password Generator{" "}
        </h1>
        <div className="flex shadow rounded-md overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 font-bold"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="w-20 outline-none text-white font-bold bg-blue-700 px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-1 font-semibold">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        
        <div className="flex text-sm gap-x-1 font-semibold">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev) => !prev)
            }}
          /> <label htmlFor="numberInput">Numbers</label>
          <input 
          type="checkbox" 
          id="specInput" 
          defaultChecked={specAllowed}
          onChange={() => {
            setSpecAllowed((prev) => !prev)
          }}
           /> <label htmlFor="specInput">Characters</label>
           </div>
        </div>
      </div>
    </>
  );
}

export default App;
