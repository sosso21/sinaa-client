import { useState,useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import styleProfil from "../../styles/profil.module.css";
import Header from "../../components/header";
import Bounce from "react-reveal/Bounce";
import Nav from "../../components/nav.js";
import Gneral from "../../components/profil/general.js";
import Security from "../../components/profil/security.js";
import Adress from "../../components/profil/adress.js";
import Contact from "../../components/profil/contact.js";
import { Lang } from "../../plugins/lang.js";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Profil = () => { 
  const textLang = Lang().profil;
const router = useRouter();
const [progress, setProgress] = useState(0);

const calcProgress =()=>{
  const user = JSON.parse(sessionStorage.getItem("userInfo"));
 let pts =0 
  for (const [key, value] of Object.entries(user)) {
    if (value && value!="none") {
      pts++;
    }
  }
  setProgress(Math.round((pts/14)*100));
 
}

const changeInfoUser =( user )=>{
  return new Promise( (resolve, reject) => {
    
   let   body={token:localStorage.getItem("token")}
    for (const key in user) {
     if(!!user[key])
     body[key] = user[key]
    }

  fetch(process.env.URLSERVER+ "/api/changeUserInfo", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams({
       str:JSON.stringify(body)
    }).toString(),
  })
  .then((res) => res.json())
  .then(
    (result) => {
      
let msg = "";

      if(!!result.success){
        msg = textLang.successMsg;
        sessionStorage.setItem("userInfo",JSON.stringify(result.success));
        
        calcProgress()
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

useEffect(() => {
  calcProgress()
}, [])

const Navigation = [
    {
      name:textLang.general ,
      slug: "/profil/general",
      element: <Gneral changeInfoUser={changeInfoUser} />,
    },
    {
      name:textLang.security ,
      slug: "/profil/security",
      element: <Security  changeInfoUser={changeInfoUser}/>,
    },
    {
      name:textLang.adress ,
      slug: "/profil/adress",
      element: <Adress changeInfoUser={changeInfoUser} />,
    },
    {
      name:textLang.contact ,
      slug: "/profil/contact",
      element: <Contact changeInfoUser={changeInfoUser} />,
    },
  ];
   
const Componant = useMemo(()=>() => {
        const actifEleement= Navigation.filter(i=>"/profil/"+router.query.section == i.slug)
        
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

      <main className={styleProfil.containerSection+" "+ styleProfil.bgProfil}> 
      <h1 className="my-4 text-center fw-lighter">{textLang.title}</h1>

      <Nav Navigation={Navigation}  actualRout={Componant()} />
       <Bounce left>{Componant().element}
       
    <section>
      {(progress<100) && <p><i className="bi bi-info-circle mx-1"></i> {textLang.NBprogress}</p>}
       <ProgressBar variant="warning" className="w-100 bg-secondary fs-5 h-100" now={progress} label={`${progress}%`} />
      </section>
       </Bounce>
       
      </main>
    </>
  );
};

export default Profil;
