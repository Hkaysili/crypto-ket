
import './App.scss'; 
import {  
  Route,
  Routes,
  BrowserRouter as Router 
} from "react-router-dom";  
// context api 
import { MainContext } from './context';

// pages import
import Home from "./components/Home";
import MyItems from "./components/MyItems";
import Following from "./components/Following";
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() { 
  const [topSeller, setTopSeller] = useState([]);       
  const [hotBids, setHotBids] = useState([]);       
  const data = {
    topSeller,
    hotBids,
    setTopSeller,
    setHotBids
  } 
  return ( 
    <Router>  
       <MainContext.Provider value={data}>
        <div className='App font-poppins bg-dark min-h-[100vh] h-auto  overflow-auto text-white'> 
              <Header/>
              {/* Routing..... */}
              <div className='App_content'>
                  <Routes>
                    <Route path="/"  element={<Home/>} />
                    <Route path="/item" element={<MyItems/>} />  
                    <Route path="/following/*" element={<Following/>}/>   
                  </Routes>
              </div>  
              <Footer/>
          </div> 
       </MainContext.Provider> 
    </Router> 
  );
}

export default App;
