import { useRoutes } from 'react-router-dom'; 
import router from './router';

function App() {
  const element = useRoutes(router);
  return element ;
}

export default App


// import Administer from './pages/administer';
// import { Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';


// function App() {
//   return (
//       <Routes>
//         {/* <Route path="/" element={<Index />}></Route> */}
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="*" element={<Administer />}></Route>
//       </Routes>
//   );
// }

// export default App;