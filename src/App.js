// import logo from './logo.svg';
// import './App.css';
import {Route,Routes,BrowserRouter, useLocation} from 'react-router-dom';
import WebFont from 'webfontloader';

import Home from '../src/Component/Home'
import Service1 from '../src/Component/Services/Service1'
import Service2 from '../src/Component/Services/Service2'
import Service3 from '../src/Component/Services/Service3'
import Service4 from './Component/Services/Service4.js'
import Service5 from './Component/Services/Service5.js'
import Service6 from './Component/Services/Service6.js'
import Contact from './Component/ContactUs.js';
import AML from './Component/AML';
import KYC from './Component/KYC';
import PP from './Component/P&P';
import Wdis from './Component/Wdis';
import WCI from './Component/WCI';
import About from './Component/About'; 
import Performence from './Component/Performence';
import Aregis from './Component/Aregis';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { storage } from '../src/Component/firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage';


function App() {

  const [title, settitle] = useState([]);
  // var imgList=useMemo(() => title, [title]);
  // Find all the prefixes and items.
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

  const fetchData= useCallback(()=>{
      const listRef = ref(storage, 'gs://tradefisher-29821.appspot.com/Resource');
      listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef)
          .then((url) => {
            if(title.indexOf(url)===-1){
              settitle([...title,url])
            }
          })
        });
      }).catch((error) => {});
      console.log(title.length)
    },[title])
    useEffect(() => {
      fetchData()
    }, [fetchData])

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Product Sans', 'Chilanka']
        }
      });
     }, []);

  return (
    <BrowserRouter>
      <Wrapper>
       
        <Routes>  
          <Route path="/"  element={<Home/>} />
          <Route path='/Service1' element={< Service1 />}/>
          <Route path='/Service2' element={< Service2 />}/>
          <Route path='/Service3' element={< Service3 />}/>
          <Route path='/Service4' element={< Service4 />}/>
          <Route path='/Service5' element={< Service5 />}/>
          <Route path='/Service6' element={< Service6 />}/>
          <Route path='/ContactUs' element={< Contact />}/>
          <Route path='/AML' element={< AML />}/>
          <Route path='/KYC' element={< KYC />}/>
          <Route path='/PP' element={< PP />}/>
          <Route path='/Wdis' element={< Wdis />}/>
          <Route path='/WCI'  element={< WCI />}/>
          <Route path='/About'  element={< About />}/>
          <Route path='/Performence'  element={< Performence name={title} />}/>
          <Route path='/Aregis'  element={< Aregis />}/>


        </Routes>
      </Wrapper> 
    </BrowserRouter>
    
  );
}

export default App;
