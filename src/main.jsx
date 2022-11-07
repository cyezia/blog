import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
// import Login from './pages/Login/index';
// import Administer from './pages/administer';
// import Article from './pages/administer/blogManagement/article';
// import Tag from './pages/administer/blogManagement/tag';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        {/* <Routes>
          <Route path="/" element={< App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/administer" element={<Administer />}>
            <Route path="/administer/blog/article" element={<Article />} />
            <Route path="/administer/blog/tag" element={<Tag />} />
          </Route>
        </Routes> */}
      </BrowserRouter>
  </React.StrictMode>
);
