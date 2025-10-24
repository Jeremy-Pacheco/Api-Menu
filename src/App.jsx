// import React from 'react'
// import Particles from './Particles'

// function App () {
//   return (
//     <div className='w-full h-screen relative bg-black flex justify-center items-center'>
//       <div className='w-full h-screen relative'>
//         <Particles
//           particleColors={['#ffffff', '#ffffff']}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>
//       <div className='absolute flex flex-col justify-center items-center w-full h-full'>
//         <h1 className='text-white font-bold text-6xl mb-10 '>
//           Menu
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default App




// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Seafood from './Pages/Seafood';
// import Meats from './Pages/Pork';
// import Vegetarian from './Pages/Vegetarian';

// function App () {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path='/Seafood' element={<Seafood />}/>
//       <Route path='/Pork' element={<Meats />}/>
//       <Route path='/Vegetarian' element={<Vegetarian />}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuList from "./components/MenuList";
import MealDetail from "./components/MealDetail";
import NavBar from "./components/NavBar";
// import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MenuList category="Seafood" />} />
        <Route path="/category/:category" element={<MenuList />} />
        <Route path="/meals/:id" element={<MealDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
