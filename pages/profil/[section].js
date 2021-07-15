import { useMemo } from "react";
import { useRouter } from "next/router";
import styleProfil from "../../styles/profil.module.css";
import Header from "../../components/header";
import Bounce from "react-reveal/Bounce";
import Nav from "../../components/profil/nav.js";
import Gneral from "../../components/profil/general.js";

const Profil = () => { 
const router = useRouter();

const Navigation = [
    {
      name: "Général",
      slug: "general",
      element: <Gneral/>
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
   
const Componant = useMemo(()=>() => {
        const actifEleement= Navigation.filter(i=>router.query.section == i.slug)
       
        if (!!(actifEleement.length)) {
            
            return actifEleement[0]
        }else{
            return Navigation[0]
        }
    },
    [router.query])
 


  return (
    <>
      <Header />

      <main className={styleProfil.bgProfil}> 
      <h1 className="my-4 text-center fw-lighter">Profil</h1>

      <Nav Navigation={Navigation}  actualRout={Componant()} />
       <Bounce left>{Componant().element}</Bounce>


      </main>
    </>
  );
};

export default Profil;
