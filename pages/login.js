import {useState,useEffect} from 'react';

import Header from "../components/header";
import Modal from 'react-bootstrap/Modal';
import StyleLogin from "../styles/log.module.css";
import HeadComponents from  "../components/HeadComponents";
import {Lang} from "../plugins/lang.js";

import { useRouter } from "next/router";


const Login=() => {
  const router = useRouter();
  const textLang =Lang().Login;


  const [ log,setLog ]=useState( {email: '',pass: ''} );
  const [ seePass,setSeePass ]=useState( false );
  const [ errorLogin,setErrorLogin ]=useState("");
  const [ show,setShow ]=useState( false ) 
  const [ mpEmail,setMpEmail ]=useState("")
  const [ mpError,setmpError ]=useState('')

  const sendEmaillToConfirm=() => {
    fetch(process.env.URLSERVER+"/api/sendMeEmailConfirmation",{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams( {
        email: log.email
      } ).toString()
    } )
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
    fetch( `${process.env.URLSERVER}/api/connect`,header )
      .then( res => res.json() )
      .then( ( result) => {
        
        if ( result.error==-1 ) {
          setErrorLogin(-1)
          return sendEmaillToConfirm()
        }
        if ( result.token!= undefined ) {
          localStorage.setItem( "token",result.token);
          sessionStorage.setItem( 'userInfo',JSON.stringify(result.userInfo) );
          return router.push("/")

        } else if ( result.error != undefined ) {
          setErrorLogin(  result.error )
        }
      },
        ( err ) => {
          console.log(textLang.errOccured,err )
        }
      )
  }

  const sendEmailToMp=(e) => {
    e.preventDefault()
    const header={
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams( {
        email:mpEmail
      } ).toString()
    };

    fetch( `${process.env.URLSERVER}/api/sendEmailToResetPwd`,header )
      .then( res => res.json() )
      .then( ( result ) => {
        setmpError(result.response)

      },
        ( err ) => {
          console.log(textLang.errOccured,err )
        }
      )
  }

  
  return (
    <>
       <HeadComponents title={textLang.TitleConnect}/>

        <Header />
      <main className={`${StyleLogin.bglog} ${StyleLogin.bgLogin}` }>
        <section className={StyleLogin.wResponsive +" container my-4 text-center"}>
          <h1 className="fw-lighter my-4">{textLang.TitleConnect}</h1>


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
             
            <i onClick={() => setShow(true)} className=' btn btn-link my-4' >{textLang.passMissed}</i>
            <div className="input-group">
              {
                errorLogin &&
                <div className="text-center alert alert-danger input-group">
                  {errorLogin!=-1 ? <p className="text-center w-100"> {errorLogin} </p>
                    :
                    <p className="text-center w-100">{textLang.ConfirmEmailMsg}{log.email} <i className='btn btn-link' onClick={e => {e.preventDefault(); sendEmaillToConfirm()}}>{textLang.reSend}</i></p>
                  }
                </div>
              }
            </div>
            <button type='submit' className="my-4 btn-lg btn  btn-primary">{textLang.btnConnect}</button>

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
                  {mpError &&
                  
                  <div >
                    {( mpError=="success" )? <p className="alert alert-success">{textLang.emailSended}</p>:<p className="alert alert-danger"> {mpError}</p>}

                  </div>}
                  <button type="submit" className="btn-lg btn btn-primary my-4">{textLang.reset}</button>
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