import  { useState,useEffect } from 'react';
import Header from  "../components/header";
 import { useRouter } from "next/router";
import Flip from 'react-reveal/Flip';
import Bounce from "react-reveal/Bounce";
import Error from "../components/error.jsx";
import StyleLog from "../styles/log.module.css"
import HeadComponents from  "../components/HeadComponents"
import { Lang } from "../plugins/lang.js";
import Footer from "../components/footer"


    
const Password=() => {
  const textLang = Lang().password;
  
  const router = useRouter(); 

  const [mpInfo,setMpInfo]=useState({ omp: "",mp1: "",mp2: "" })
  const [btnDisable, setBtnDisable] = useState(false);
  const [err,setErr]=useState("")


  const resetPass=(e) => {
    e.preventDefault()
    if (mpInfo.mp1!=mpInfo.mp2) {
      return setErr({eroor:textLang.passNotIdentique})
    }

    const header={
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams({
        authorization: router.query.token ? router.query.token : localStorage.getItem("token"),
        pass: mpInfo.mp1,
        omp: router.query.token ? "" :mpInfo.omp
      }).toString()
    };
    setBtnDisable(true)
    fetch(`${process.env.URLSERVER}/api/resetPasswordForget`,header)
      .then(res => res.json())
      .then((result) => {
        if (result.error) {
          return setErr({error: textLang.errorType.filter(i=> i.error ==  result.error)[0].msg || "error" })
          
        }
        
        if (result.success=="success") {
          setErr({success:textLang.success})
          setTimeout(() => {
            setErr({success:"animation"})
          },3000);
        } 

      },
        (err) => {
          console.log(textLang.errOccured ,err)
        }
      )
      
    setBtnDisable(false)
  }
  

  const sendEmail =(e)=>{
    e.preventDefault()
    const email = JSON.parse(sessionStorage.getItem("userInfo")).email

     
  setBtnDisable(true);
  setErr("");

      fetch( `${process.env.URLSERVER}/api/sendEmailToResetPwd/${localStorage.getItem("lang") || 'en'}%%${email}`)
        .then( res => res.json() )
        .then( ( result ) => {
          
          if (result.response=="success" ) {
          return setErr({success:textLang.successEmailSended+"\n "+email})
          }else if(result.response=="not Found email" ) {
            return setErr({error:textLang.emailNotFound})
          }else {
             return setErr({error: "error"})
          }
        },
          ( err ) => {
            console.log(textLang.errOccured,err )
          }
        )
        setBtnDisable(false)
  }
 

  useEffect(() => {
    console.log("router.route :",router)
  }, [router])

  return (
   
    <main className=" h-auto w-100 d-flex align-content-between  justify-content-between flex-column">
       {(router.route== "/password" ) && <HeadComponents   />}

       {(router.route== "/password" )&&  <Header  />}
      <section className={" container text-center "+StyleLog.wResponsive}>
        <h1 className="fw-lighter my-4">{textLang.title} </h1>


          <Flip top opposite collapse when={err.success!="animation"}>
            <form className='text-center my-4' onSubmit={resetPass}>
            {(router.route!== "/password" ) && <div className="input-group my-1">
                <input value={mpInfo.omp} onChange={e => setMpInfo({ omp: e.target.value})} type="password" placeholder={textLang.OpPO} className="form-control w-100" required />
              </div>}
              <div className="input-group my-1">
                <input value={mpInfo.mp1} onChange={e => setMpInfo({...mpInfo,mp1: e.target.value })} type="password" placeholder={textLang.NfpPO} className="form-control w-100" required />
              </div>
              <div className="input-group my-1">
                <input value={mpInfo.mp2} onChange={e => setMpInfo({...mpInfo, mp2: e.target.value })} type="password" placeholder={textLang.SnpPo} className="form-control w-100" required />
              </div>
              
              {(router.route!= "/password" ) && <p>{textLang.passMissed} <i onClick={e=>sendEmail(e)} className=" text-primary btn btn-link mx-1"> {textLang.sendEmailLink} </i> </p>}
            
        <div className="input-group"><span className=" mx-auto"><Bounce top when={!btnDisable && err} > <Error response={err} /></Bounce></span> </div>
        <div className="input-group my-4 w-100">
          <button className={`btn btn-warning btn-lg  mx-auto ${!!btnDisable?"disabled":""}`}>{textLang.submitBtn}</button>
        </div>
            </form>
          </Flip>
          <Flip cascade opposite collapse  when={err.success=="animation"}>
             
            <i style={{fontSize:"20rem"} } className="mb-4 text-success bi bi-check-circle-fill"> </i>
          </Flip>  
      </section>

      {(router.route== "/password" )&&  <Footer  />}
    </main>
    
      
  );
};

export default Password