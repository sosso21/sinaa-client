import Header from "../components/header.js"

import CategoryBar from "../components/categoryBar.js"
  import Slider from "../components/slider.js"
import HeadComponents from  "../components/HeadComponents"
import Head from 'next/head'
 
import styles from '../styles/Home.module.css'


const Home=({sliderData,category})=>{
 
  return (
    <>
      <HeadComponents title="Inscription" />
 <main className="min-vh-100">
 
      <Header/>
      <CategoryBar category={category} />
      <Slider sliderData={sliderData} />


     

 </main>
    </>
  )
}
export default Home

export async function getStaticProps() {
  const res = await fetch(process.env.URLSERVER+"/api/homepage")
  const HomePage = await res.json()
  

  return {
    props: {
        sliderData: HomePage.slider,
        category:HomePage.category,
      },
    
    revalidate: 7200,  
  }
}
