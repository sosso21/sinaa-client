import { useState, useEffect } from "react";
import styleProfil from "../../styles/profil.module.css";
import PassWord from "../../pages/password.js";
import { Lang } from "../../plugins/lang.js";
import Bounce from "react-reveal/Bounce";
import Error from "../error.jsx";
 
const Security = () => {
  const textLang = Lang().profilSecurity;

  const [user, setUser] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    setUser({...JSON.parse(sessionStorage.getItem("userInfo")),pass:""}); 
  }, []);
  

const handleSubmit = (e)=>{
  e.preventDefault();
  setDisableBtn(true);
  
  console.log('proces":',{
    email:user.email,
    pass:user.pass,
     token:localStorage.getItem("token")
   })
  fetch(process.env.URLSERVER+ "/api/EditEmail", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams({
      lang:localStorage.getItem("lang"),
      email:user.email,
      pass:user.pass,
      token:localStorage.getItem("token")
    }).toString()
  })
  .then((res) => res.json())
  .then(
    (result) => {
       console.log('result:', result)
       
      if(result.success){
        setErr({success:textLang.successMsg+user.email})
      }else if(result.error == "disconnect"){
        localStorage.clear("token");
        sessionStorage.clear("userInfo");
        router.push("/")
      }else if(result.error){
        const text = textLang.error.filter(i=> i.errslug == result.error)[0] ;
        setErr({error:text ? text.msg : "error"});
        console.log('"error:', {error:text ? text.msg : "error"})
      }
    },
    (err) => {
      console.log({error:err});
    }
  );
  setDisableBtn(false);
}

  return (
    <section>
     
       <h2 className="w-100 text-center my-4  fw-lighter">{textLang.title}</h2>
      <form onSubmit={handleSubmit} className="w-100 my-4 input-group d-flex flex-column flex-wrap">


       <div className="my-4 mx-auto">
          <label htmlFor="email">
            {textLang.email}
            <input
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              className="form-control "
              placeholder={textLang.pOemail}
              required
            />
          </label>
        </div>
 
        
       <div className="my-4 mx-auto">
          <label htmlFor="pass">
            {textLang.pass}
            <input
              id="pass"
              value={user.pass}
              onChange={(e) => setUser({ ...user, pass: e.target.value })}
              type="password"
              className="form-control"
              placeholder={textLang.pOpass}
              required
            />
          </label>
        </div>
        
        <div className="input-group"><span className=" mx-auto"><Bounce top when={!disableBtn && err} > <Error response={err} /> </Bounce></span> </div>
        <div className="input-group my-4 w-100">
          <button className={`btn btn-warning btn-lg  mx-auto ${disableBtn?"disabled":""} `}>{textLang.submitBtn}</button>
        </div>
      </form>
      
      <hr className="w-100 mx-4  d-block border border-primary my-4" />

      <PassWord/>
    </section>
  );
};
export default Security;
