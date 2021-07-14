import Header from "../components/header.js"
  import Slider from "../components/slider.js"
import HeadComponents from  "../components/HeadComponents"
import Head from 'next/head'
import styles from '../styles/Home.module.css'


const  Home=()=>{
  return (
    <>
      
      <HeadComponents title="Inscription" />
      
 <main className="min-vh-100">
      <Header/> 
      <Slider/>

 </main>

    </>
  )
}
export default Home