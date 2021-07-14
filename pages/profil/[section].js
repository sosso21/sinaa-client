import { useMemo,useEffect } from "react";
import Header from "../../components/header";
import Nav from "../../components/profil/nav.js";
import { useRouter } from "next/router";

const Profil = () => { 
const router = useRouter();

const Navigation = [
    {
      name: "Général",
      slug: "general",
      element: "",
    },
    {
      name: "Sécurité",
      slug: "security",
      element: "",
    },
    {
      name: "Adresse",
      slug: "adress",
      element: "",
    },
    {
      name: "Contact",
      slug: "contact",
      element: "",
    },
  ];
   
const test = useMemo(()=>() => {
        const actifEleement= Navigation.filter(i=>router.query.section == i.slug)
       
        if (!!(actifEleement.length)) {
            
            return actifEleement[0]
        }else{
            return Navigation[0]
        }
    },
    [router.query],
)

    useEffect(() => {
       
         
        console.log('test:', test() )
    }, [test])
     



  return (
    <>
      <Header />

      <h1 className="my-4 text-center fw-lighter">Profil</h1>

      <Nav Navigation={Navigation}  actualRout={test()} />
      <main className="container my-4 mx-auto">
        {Navigation.map((i) => "hello")}
      </main>
    </>
  );
};

export default Profil;
