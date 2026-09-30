
import './App.css'
import React, { useCallback, useState } from "react";

const Child =React.memo(({ handleClick }) => {
  console.log("Child render");
  return (
    <button onClick={handleClick}>
      Child Button
    </button>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count+1)
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={handleClick}>
        Increase
      </button>

      <Child handleClick={handleClick} />
    </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0)

//   const handleClickk=useCallback(()=>{
//     setCount(count+1)
//   },[count])
  // useEffect(()=>{
  //   alert("count was changed")
  // })
  // useEffect(()=>{
  //   alert("color was changed")
  // },[count])

  // return (
  //  <div>
  //   <div>
  //     Count:{count}
  //   </div>
  //   <br></br>
  //   <div>
  //   <button onClick={handleClickk}>
  //     count button
  //   </button>
  //   </div>
  //   <br></br>
  //   <div>
  //     <Childcomponents buttonName="click me2"/>
  //   </div>
  //  </div>
  // )
// }

export default App
