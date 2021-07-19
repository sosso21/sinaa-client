import { useMemo } from "react";
import { useRouter } from "next/router";
import styleProfil from "../../styles/profil.module.css";
import Header from "../../components/header";
import Bounce from "react-reveal/Bounce";
import Nav from "../../components/profil/nav.js";
import Gneral from "../../components/profil/general.js";
import Security from "../../components/profil/security.js";
import Adress from "../../components/profil/adress.js";
import Contact from "../../components/profil/contact.js";
import { Lang } from "../../plugins/lang.js";

const Profil = () => { 
  const textLang = Lang().profil;
const router = useRouter();

const Navigation = [
    {
      name:textLang.general ,
      slug: "general",
      element: <Gneral/>
    },
    {
      name:textLang.security ,
      slug: "security",
      element: <Security/>,
    },
    {
      name:textLang.adress ,
      slug: "adress",
      element: <Adress/>,
    },
    {
      name:textLang.contact ,
      slug: "contact",
      element: <Contact/>,
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
      <h1 className="my-4 text-center fw-lighter">{textLang.title}</h1>

      <Nav Navigation={Navigation}  actualRout={Componant()} />
       <Bounce left>{Componant().element}</Bounce>


      </main>
    </>
  );
};

export default Profil;
