
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Model from './components/Model'
import Navbar from './components/Navbar'
import Tab from './components/Tab'
import Cart from './components/Cart'
import { ToastContainer } from 'react-toastify'
const getModels = async()=>{
  const res = await fetch('/models.json');
  return res.json()
}
 const modelPromise=getModels();
function App() {
  const [activeTab,setActiveTab]=useState('model');
  const [carts,setCarts]=useState([]);
  
  return (
    <>
   <Navbar/>
   <Banner/>
   <Tab setActiveTab={setActiveTab} carts={carts}/>
   {activeTab === 'model' && <Model modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
   {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts}/>}
   <Footer/>

    <ToastContainer />
    </>
  )
}

export default App
