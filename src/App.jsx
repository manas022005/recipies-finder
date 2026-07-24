import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="py-10 px-[8%] w-screen h-screen bg-gray-800 text-white font-thin ">
      <Mainroutes />
      <Navbar/>
    </div>
  );
}

export default App
