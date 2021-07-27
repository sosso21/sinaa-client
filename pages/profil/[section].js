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

const changeInfoUser =(user )=>{
  return new Promise( (resolve, reject) => {
   

  fetch(process.env.URLSERVER+ "/api/changeUserInfo", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams({
      ...user,
      token:localStorage.getItem("token")
    }).toString(),
  })
  .then((res) => res.json())
  .then(
    (result) => {
       
      let msg = "";
      if(result.success){
          msg = textLang.successMsg;
        sessionStorage.setItem("userInfo",JSON.stringify(result.success));
      }else if(result.error == "disconnect"){
        localStorage.clear("token");
        sessionStorage.clear("userInfo");
        router.push("/")
      }else if(result.error){
        const text = textLang.errorsMsg.filter(i=> i.errslug == result.error)[0] ;
        msg = text ?  text.errMsg : "error";
      }
      resolve({...result,msg:msg});
    },
    (err) => {
      reject({error:err});
    }
  );
})
}


const Navigation = [
    {
      name:textLang.general ,
      slug: "general",
      element: <Gneral changeInfoUser={changeInfoUser} />,
    },
    {
      name:textLang.security ,
      slug: "security",
      element: <Security/>,
    },
    {
      name:textLang.adress ,
      slug: "adress",
      element: <Adress changeInfoUser={changeInfoUser} />,
    },
    {
      name:textLang.contact ,
      slug: "contact",
      element: <Contact changeInfoUser={changeInfoUser} />,
    },
  ];
   
const Componant = useMemo(()=>() => {
        const actifEleement= Navigation.filter(i=>router.query.section == i.slug)
        
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

      <main className={styleProfil.bgProfil}> 
      <h1 className="my-4 text-center fw-lighter">{textLang.title}</h1>

      <Nav Navigation={Navigation}  actualRout={Componant()} />
       <Bounce left>{Componant().element}</Bounce>
      </main>
    </>
  );
};

export default Profil;
