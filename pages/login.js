import {useState,useEffect} from 'react';

import Header from "../components/header";
import Modal from 'react-bootstrap/Modal';
import StyleLogin from "../styles/log.module.css";
import HeadComponents from  "../components/HeadComponents";
import {Lang} from "../plugins/lang.js";
import Error from "../components/error.jsx";
import Fade from 'react-reveal/Fade';

import { useRouter } from "next/router";


const Login=() => {
  const router = useRouter();
  const textLang =Lang().Login;


  const [btnDisable, setBtnDisable] = useState(false);
  const [ log,setLog ]=useState( {email: '',pass: ''} );
  const [ seePass,setSeePass ]=useState( false );
  const [ errorLogin,setErrorLogin ]=useState("");
  const [ show,setShow ]=useState( false ) 
  const [ mpEmail,setMpEmail ]=useState("")
  const [ mpError,setmpError ]=useState("")

  const sendEmaillToConfirm=() => {
    
  fetch(process.env.URLSERVER+ "/api/sendMeEmailConfirmation/"+(localStorage.getItem("lang") ||  'en')+"%%"+log.email)
     
  }

  const onConnect=(e) => {
    e.preventDefault();
    const header={
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams( {
        email: log.email,
        pass: log.pass
      } ).toString()
    };
    setBtnDisable(true)
    setErrorLogin("")
    fetch( `${process.env.URLSERVER}/api/client/connect`,header )
      .then( res => res.json() )
      .then( ( result) => {
      
        if ( result.token!= undefined ) {
           localStorage.setItem( "token",result.token);
           sessionStorage.setItem( 'userInfo',JSON.stringify(result.userInfo));
           return router.push("/")

        } else if ( result.error != undefined ) {
          setBtnDisable(false)
          const err= result.error;
          const className= "d-block text-center alert alert-danger form-group";

          if (err== "email pass incorrect"){
            return setErrorLogin(<div className={className}>{textLang.errIncorrect}</div>)
          }
          if (err== "blocked"){
            return setErrorLogin(<div className={className}> {textLang.errBlocked}</div>)
          }else if(err=="waiting"){
 
          setErrorLogin(<div className="d-block text-center alert alert-warning form-group"> {textLang.errWaiting} <i className="mx-1">{log.email}</i><i className='btn btn-link' onClick={e => sendEmaillToConfirm(e)}>{textLang.btnResend}</i> </div>);
          return sendEmaillToConfirm()
          }
          else{
            setErrorLogin(<div className={className}>{textLang.errUnknow}</div>)
          }
        }
      },
        ( err ) => {
          console.log(textLang.errOccured,err )
        }
      )
  }
 
const sendEmailToMp =(e)=>{
  e.preventDefault();
setBtnDisable(true)
setErrorLogin("")
    fetch( `${process.env.URLSERVER}/api/sendEmailToResetPwd/${localStorage.getItem("lang") || 'en'}%%${mpEmail}`)
      .then( res => res.json() )
      .then( ( result ) => {
        
        setBtnDisable(false)
        if (result.response=="success" ) {
        return setmpError({success:textLang.emailSended})
        }else if(result.response=="not Found email" ) {
          return setmpError({error:textLang.emailNotFound})
        }else {
           return setmpError({error: "error"})
        }

      },
        ( err ) => {
          console.log(textLang.errOccured,err )
        }
      )
  }

useEffect(() => {
  if ( btnDisable == true || mpEmail || errorLogin ) {
    setBtnDisable(false)
    setErrorLogin("")
    setmpError("")
  }
}, [mpEmail,log])
  
  return (
    <>
       <HeadComponents title={textLang.TitleConnect}/>

        <Header />
      <main className={`${StyleLogin.bglog} ${StyleLogin.bgLogin}` }>
        <section className={StyleLogin.wResponsive +" container my-4 text-center"}>
          <h1 className="fw-lighter text-light my-4">{textLang.TitleConnect}</h1>


          <form onSubmit={e => onConnect( e )} >
       
            <div className="input-group my-1">
              <input value={log.email} onChange={e => setLog( {email: e.target.value,pass: log.pass} )} type="email" className='form-control' placeholder={textLang.email} />
            </div> 
            
            <div className="input-group my-1">
              <input value={log.pass} onChange={e => setLog( {email: log.email,pass: e.target.value} )} type={seePass? 'text':'password'} className='form-control ' placeholder={textLang.pass} />
           
           </div>
           <div className="input-group ">
              <i onClick={() =>   setSeePass( !seePass )} className={StyleLogin.eyesItem+ ` text-primary bi  ${seePass ? "bi-eye-fill":"  bi-eye-slash-fill" }`} ></i>
            </div>
             
            <i onClick={() => setShow(true)} className='text-primary btn btn-link my-1' >{textLang.passMissed}</i>
            
            
                 <Fade   top when={errorLogin} > {errorLogin} </Fade>
                  
            <button type='submit' className={`mx-auto d-block my-1 btn btn-lg btn-warning ${btnDisable &&  "disabled"} `}>{textLang.btnConnect}</button>

          </form>
        </section>

        <aside>
          <Modal
            show={show}
            onHide={() => setShow( false )}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2 className="my-4 fw-lighter">{textLang.titleModalMissendPass}</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
               <div>
                <form className='text-center my-4' onSubmit={e => sendEmailToMp( e )}>
                  <div className="input-group ">
                    <input value={mpEmail} onChange={e => setMpEmail( e.target.value)} type="email" placeholder={textLang.email} className="form-control " required />
                  </div>
                 <Fade top when={mpError}> <Error response={mpError} /> </Fade> 
                
                  <button type="submit" className={`m-auto d-block my-4 btn btn-lg btn-warning ${!!btnDisable &&  "disabled"} `}>{textLang.reset}</button>
                </form>
              </div> 
            </Modal.Body>
          </Modal>
        </aside>
        
      </main>
    </>
  );
};

export default Login 
 