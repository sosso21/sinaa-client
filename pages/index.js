import Image from 'next/image'
import Header from "../components/header.js"
  import Slider from "../components/slider.js"
import HeadComponents from  "../components/HeadComponents"
import Head from 'next/head'
import myLoader from "../plugins/imgLoader.js"
 
import styles from '../styles/Home.module.css'


const  Home=()=>{
  return (
    <>
      <HeadComponents title="Inscription" />
 <main className="min-vh-100">
      <Header/> 
      <Slider/>


      <Image loader={myLoader}  width={500} height={500} src={"https://firebasestorage.googleapis.com/v0/b/sinaa-fr.appspot.com/o/mini-hermes.jpg?alt=media&token=aedf88d8-7c9a-47d1-932a-f857cc7cec9"} alt="hello"/>

 </main>
    </>
  )
}
export default Home