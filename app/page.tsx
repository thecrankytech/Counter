"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(Number(localStorage.count || 0));
  
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }

useEffect(() => {
    localStorage.count = count;
    document.title = `You clicked ${count} times`;
    return () => {
      localStorage.clear()
    }
}, [count]);

  const clearCount = () => {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold pt-5">{count}</h1>
      <button className="border border-transparent rounded-md p-3 font-bold bg-blue-500 text-white hover:bg-blue-700" onClick={handleClick}>Click Me</button>
      <button className="border border-transparent rounded-md p-3 font-bold bg-red-500 text-white hover:bg-red-700" onClick={clearCount}>Clear</button>
    </div>
  );
}