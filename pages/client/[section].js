import { useState,useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import styleClient from "../../styles/profil.module.css";
import Header from "../../components/header";
import Bounce from "react-reveal/Bounce";
import Nav from "../../components/nav.js";
import Footer from "../../components/footer.js"
import Post from "../../components/client/post.js";
import { Lang } from "../../plugins/lang.js";


const Client =   ({ category=[]  }) => {
    
  const textLang = Lang().client_space;
const router = useRouter();
   


const Navigation = [
    {
      name:textLang.nav.addProduct ,
      slug: "/client/post",
      element: <Post _category={category} />,
    },
    {
      name:textLang.nav.MmyFavorit ,
      slug: "/client/favorit",
      element:<h1>favorit</h1> ,
    },
    {
      name:textLang.nav.myProducts ,
      slug: "/client/product",
      element:<h1>product</h1> ,
    },
  ];
   
const Componant = useMemo(()=>() => {
        const actifEleement= Navigation.filter(i=> "/client/"+router.query.section == i.slug)
        
        if (!!(actifEleement.length)) {
          return actifEleement[0];
        }else {
          return Navigation[0];
        }
    },
    [router.query])
 
    
  return (
    <>
      <Header />

      <main className={styleClient.containerSection+" "+ styleClient.bgClient}> 
      <h1 className="my-4 text-center fw-lighter">{textLang.title}</h1>

      <Nav Navigation={Navigation}  actualRout={Componant()} />
       <Bounce left>{Componant().element}
        
       </Bounce>
       
      </main>
      <Footer/>
    </>
  );
};

  
export default Client;  
 


export async function getStaticPaths() {
   

  // Get the paths we want to pre-render based on posts
  const paths = ["post","favorit","product" ].map((i) => ({
    params: { section: i},
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
  
  
  //let   body={token:localStorage.getItem("token")}
 
  const res = await fetch(process.env.URLSERVER + "/api/category/find" );
  const category = await res.json();
 
  return {
    props: {
      category:category,
    },
    revalidate: 60,
  };
}
