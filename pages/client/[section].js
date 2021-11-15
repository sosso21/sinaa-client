import { useState,useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import styleClient from "../../styles/profil.module.css";
import Header from "../../components/header";
import Bounce from "react-reveal/Bounce";
import Nav from "../../components/nav.js";
import Post from "../../components/client/post.js";
import Security from "../../components/client/security.js";
import Adress from "../../components/client/adress.js";

import { Lang } from "../../plugins/lang.js";


const Client =   ({ category=[], products=[] }) => {
    
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
      element: <Security/>,
    },
    {
      name:textLang.nav.myProducts ,
      slug: "/client/product",
      element: <Adress changeInfoUser={()=>{} } />,
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
   
  const res = await fetch(process.env.URLSERVER + "/api/homepage");
  const HomePage = await res.json();
 
 
  return {
    props: {
      category: HomePage.category,
      products: HomePage.product, 
    },
    revalidate: 60,
  };
}

