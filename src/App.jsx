
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Model from './components/Model'
import Navbar from './components/Navbar'
const getModels = async()=>{
  const res = await fetch('/models.json');
  return res.json()
}

function App() {
  const modelPromise=getModels()
  return (
    <>
   <Navbar/>
   <Banner/>
   <Suspense>
    <Model modelPromise={modelPromise} />
   </Suspense>
   <Footer/>
    </>
  )
}

export default App
