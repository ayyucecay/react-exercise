import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer } from "react";
import UserProfile from "./context.js";
import Reducer from "./reducer";
import React from "react";
import Memo from "./memo";
import Ref from "./ref";
import ImperativeHandle from "./imperativeHandle";
import LayoutEffect from "./useLayoutEffect";
const users = [
  {
    name: "Harry Potter",
    occupation: "Wizard",
  },
  {
    name: "Kent Clark",
    occupation: "Super hero",
  },
];
export const UserContext = React.createContext(users);
function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`first button click ${count} times`);
  }, [count]);

  const[count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`second button click ${count2} times`);
  },[count2]);



  return (
    <div>
      <button onClick={() => setCount(count+1)}>Click me</button>
      <button onClick={() => setCount2(count2+1)}>Click me</button>
      <UserContext.Provider value={users}>
        <UserProfile />
      </UserContext.Provider>
      <Reducer />
        <Memo />
      <Ref />
        <ImperativeHandle />
        <LayoutEffect />
    </div>
  );
}

export default App;
