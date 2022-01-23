import Header from "../components/header.js"

import CategoryBar from "../components/categoryBar.js"
  import Slider from "../components/slider.js"
import HeadComponents from  "../components/HeadComponents"
import ItemArticle from  "../components/itemArticle.jsx"
import Head from 'next/head'
import PreFooter from "../components/preFooter" 
import Footer from "../components/footer.js"

import styles from '../styles/Home.module.css'


const Home=({product,category,sliderData})=>{
 
  return (
    <>
      <HeadComponents title="Inscription" />
 <main className="min-vh-100">
 
      <Header/>
      <CategoryBar category={category} />
      <Slider sliderData={sliderData} />
      <ItemArticle category={category.filter(i=>i.home == true)} product={product} />
      <PreFooter />
      <Footer/>

     

 </main>
    </>
  )
}
export default Home

export async function getStaticProps() {
  const res = await fetch(process.env.URLSERVER+"/api/porduct/findhomepage");
  const HomePage = await res.json();
  

  return {
    props: {
      product: HomePage.product,
      category:HomePage.category,
      sliderData: HomePage.slider,
      },
    
    revalidate: 7200,  
  }
}
