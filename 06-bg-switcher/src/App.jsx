import { useState } from "react";
import "./App.css";

function App() {

  let [bg, setBg] = useState('bg-black');

  // function changeColor(color){
  //   switch (color){
  //     case 'red': 
  //       setBg('bg-red-700');
  //       break;
  //     case 'blue': 
  //       setBg('bg-blue-600');
  //       break;
  //     case 'yellow': 
  //       setBg('bg-yellow-400');
  //       break;
  //     case 'orange': 
  //       setBg('bg-orange-500');
  //       break;
  //     case 'pink': 
  //       setBg('bg-pink-400');
  //       break;
  //     case 'gray': 
  //       setBg('bg-gray-500');
  //       break;
  //     case 'olive': 
  //       setBg('bg-olive-500');
  //       break;
  //     case 'green': 
  //       setBg('bg-green-500');
  //       break;
  //     case 'purple': 
  //       setBg('bg-purple-500');
  //       break;
  //     case 'brown': 
  //       setBg('bg-amber-600');
  //       break;
  //     default:
  //       setBg('bg-black');
  //       break;
  //   }
  // }

  return (
    <>
      <div className={`h-screen ${bg} flex items-end justify-center`}>
        <div className="h-max bg-white w-max mb-8 rounded-sm p-2 flex items-center gap-4">
          <button className="bg-red-700 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-red-700')}>Red</button>
          <button className="bg-blue-600 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-blue-600')}>Blue</button>
          <button className="bg-yellow-400 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-yellow-400')}>Yellow</button>
          <button className="bg-orange-500 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-orange-500')}>Orange</button>
          <button className="bg-pink-400 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-pink-400')}>Pink</button>
          <button className="bg-gray-500 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-gray-500')}>Gray</button>
          <button className="bg-olive-500 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-olive-500')}>Olive</button>
          <button className="bg-green-500 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-green-500')}>Green</button>
          <button className="bg-purple-500 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-purple-500')}>Purple</button>
          <button className="bg-amber-600 text-white py-1 px-4 rounded-lg" onClick={() => setBg('bg-amber-600')}>Brown</button>
        </div>
      </div>
    </>
  );
}

export default App;
