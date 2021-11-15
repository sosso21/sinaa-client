import { useState, useEffect } from "react";
import styleProfil from "../../styles/profil.module.css";
import { Lang } from "../../plugins/lang.js";
import Bounce from "react-reveal/Bounce";
import Error from "../error.jsx";
import wilaya from "../../store/wilaya.js";

const Adress = ({changeInfoUser}) => {
  const textLang = Lang().adress;
  

  const [user, setUser] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("userInfo"));
    setUser(sessionUser); 
  }, []);
  


 const handleSubmitI=async(e)=>{
   e.preventDefault();  
   setDisableBtn(true)
   const result = await changeInfoUser(user);
    
   if (result.success) {
     setUser(result.success);
     setErr({success:result.msg})
   }else{
     setErr({error:result.msg})
   }
 
 setDisableBtn(false)
   
 }

  return (
    <section>
     
     <h2 className="w-100 text-center my-4  fw-lighter">{textLang.title}</h2>
    
      <form onSubmit={handleSubmitI} className="my-4 mx-auto  input-group">

       <div className="my-4 mx-auto">
          <label htmlFor="commune">
            {textLang.commune}
            <input
              id="commune"
              value={user.commune}
              onChange={(e) => setUser({ ...user, commune: e.target.value })}
              type="text"
              className="form-control "
              placeholder={textLang.pOCommune}
              required
            />
          </label>
        </div> 

          <div className="w-100 my-4 mx-auto d-block">
          <select
            onChange={(e) =>  setUser({ ...user, wilaya: e.target.value })}
            value={user.wilaya}
            className="w-50 mx-auto form-select form-select-lg"
            aria-label=".form-select-lg example"required
          >
            <option> {textLang.wilaya}  </option> 
            {wilaya.map((i,index)=><option key={index} value={i}>{`${+index+1} - ${i}`} </option>)}
          </select>
        </div>

 
        <div className="input-group"><span className=" mx-auto"><Bounce top when={!disableBtn && err} > <Error response={err} /></Bounce></span> </div>
        <div className="input-group my-4 w-100">
          <button className={`btn btn-warning btn-lg  mx-auto ${disableBtn?"disabled":""} `}>{textLang.submitBtn}</button>
        </div>
      </form>
      
    </section>
  );
};
export default Adress;
