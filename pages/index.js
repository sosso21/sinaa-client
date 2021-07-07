import Header from "../components/header.js"
///  import Slider from "../components/Slider.js"
import HeadComponents from  "../components/HeadComponents"
import Head from 'next/head'
import styles from '../styles/Home.module.css'

 const Home=()=>{
  return (
    <>
      
      <HeadComponents title="Inscription" />
      
 <main className="min-vh-100">
      <Header/> 

 <h>Helloo</h>

 </main>

    </>
  )
}

export default Home



// <Slider/>