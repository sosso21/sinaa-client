import { useState, useEffect } from "react";
import styleProfil from "../../styles/profil.module.css";
import myLoader from "../../plugins/imgLoader.js";
import { Lang } from "../../plugins/lang.js";
import submitImage from "../../plugins/CompressImageNSend.js";
import Fade from "react-reveal/Rotate";
import Error from "../error.jsx";
 
const Gneral = ({changeInfoUser}) => {
  const textLang = Lang().profilGeneral;
  const [user, setUser] = useState("");
  const [bDate, setBDate] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState("");


  const handleChangePDP= async (file)=>{
    setDisableBtn(true)
const response =await submitImage(file)

if (response.url) {
  const result = await changeInfoUser({ profil_image_link:response.url});
   
  if (result.success) {
    setUser(result.success)
  }else{
    console.log(result.msg)
  }
 
}
setDisableBtn(false)
  }

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("userInfo"));
    if (!user) {
      setUser(sessionUser);
    }
    if (sessionUser.birth_day) {
      const date = (sessionUser.birth_day).split("-")
      setBDate({
        dd: +date[2],
        mm: +date[1],
        yyyy: +date[0],
      });
    }
  }, [user]);

  const getDefaultTime = () => {
    const date = new Date();
    let dd = [];
    let mm = [];
    let yyyy = [];
    for (let index = 1; index <= 31; index++) {
      dd = [...dd, index];
      if (index <= 12) {
        mm = [...mm, index];
      }
    }
    for (
      let index = date.getFullYear() - 15;
      index > date.getFullYear() - 100;
      index--
    ) {
      yyyy = [...yyyy, index];
    }
    return {
      dd: dd,
      mm: mm,
      yyyy: yyyy,
    };
  };
 const handleSubmitI=async(e)=>{
   e.preventDefault(); 
   const nToExa=(x)=> (x<10)?"0"+x:x;
   const birth_date = new Date(bDate.yyyy+"-"+bDate.mm+"-"+bDate.dd);
   let  obj = user;

   if (birth_date != "Invalid Date") {
      obj = {...obj,birth_day:bDate.yyyy+"-"+nToExa(bDate.mm)+"-"+nToExa(bDate.dd)}
     }

   setDisableBtn(true)
   const result = await changeInfoUser(obj); 
   
    
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
      <h2 className="w-100 my-4 text-center d-block fw-lighter">{textLang.title} </h2>

      
      <div className="w-100 text-center d-block">
        <i
          className={styleProfil.imgProfil }
          style={{
            backgroundImage: `url("${
              user.profil_image_link
                ? user.profil_image_link
                : "/profilDefault.png"
            }")`,
          }}
        >
          <label htmlFor={!disableBtn && "imageFile"}
            className={styleProfil.biOnHover + ` text-warning ${!!disableBtn?"spinner-border":"btn bi bi-camera"}` }
          ></label>
          <input type="file" id="imageFile" className="d-none" onChange={e=> handleChangePDP(e.target.files[0])} />
        </i>
      </div>
      <div className="w-100  text-center d-block">
        <strong className="fs-1 fw-lighter">{user.username} </strong>
      </div>

      <hr className="w-100 mx-4  d-block border border-primary my-4" />

      <form onSubmit={handleSubmitI} className="my-4 mx-auto  input-group">
        <div className="my-2 mx-4">
          <label htmlFor="username">
            {textLang.username}
            <input
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              className="form-control"
              placeholder={textLang.placeOlderNames}
              required
            />
          </label>
        </div>

        <div className="my-2 mx-4">
          <label htmlFor="firstname">
            {textLang.firstname}
            <input
              id="firstname"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              type="text"
              className="form-control "
              placeholder={textLang.placeOlderNames}
              required
            />
          </label>
        </div>

        <div className="my-2 mx-4">
          <label htmlFor="lastname">
            {textLang.lastname}
            <input
              id="lastname"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              type="text"
              className="form-control"
              placeholder={textLang.placeOlderNames}
              required
            />
          </label>
        </div>
 
        <div className="w-100 my-4 mx-auto d-block">
          <select
            onChange={(e) => setUser({ ...user, sexe: e.target.value })}
            value={user.sexe}
            className="w-50 mx-auto form-select form-select-lg"
            aria-label=".form-select-lg example" required
          >
            <option value="none">{textLang.selectSexe} </option>
            <option value="homme">{textLang.selectBoy} </option>
            <option value="femme">{textLang.selectGirl} </option>
          </select>
        </div>

        <div className="w-100 my-4 mx-auto d-flex justify-content-center align-content-center flex-wrap">
          <label  className="w-100 d-block text-center m-2" htmlFor="dateBirth">{textLang.dateBirth}</label>
          <select
          id="dateBirth"
            onChange={(e) =>  setBDate({ ...bDate, dd: e.target.value })}
            value={bDate.dd}
            className="w-25 m-2  form-select form-select-lg"
            aria-label=".form-select-lg example" required
          >
            <option>{textLang.dateBDay} </option> 
            {getDefaultTime().dd.map((i,key)=><option key={key} value={i}>{i} </option>)}
          </select>
          <select
            onChange={(e) =>  setBDate({ ...bDate, mm: e.target.value })}
            value={bDate.mm}
            className="w-25 m-2  form-select form-select-lg"
            aria-label=".form-select-lg example"
            required
          >
            
            <option>{textLang.dateMounth} </option> 
            {getDefaultTime().mm.map((i,key)=><option key={key} value={i}>{i} </option>)}
          </select>
          <select
            onChange={(e) =>  setBDate({ ...bDate, yyyy: e.target.value })}
            value={bDate.yyyy}
            className="w-25 m-2  form-select form-select-lg"
            aria-label=".form-select-lg example" required
          >
            
            <option>{textLang.dateYear} </option> 
            {getDefaultTime().yyyy.map((i,key)=><option key={key} value={i}>{i} </option>)}
          </select>
        </div>

        <div className="my-2 mx-auto">
          <label htmlFor="birthPlace">
            {textLang.birth_place}
            <input
              id="birthPlace"
              value={user.birth_place}
              onChange={(e) => setUser({ ...user, birth_place: e.target.value })}
              type="text"
              className="form-control"
              placeholder={textLang.PObirth_place}
              required
            />
          </label>
        </div>
        
        <div className="input-group"><span className=" mx-auto"><Fade top when={!disableBtn && err} > <Error response={err} /> </Fade></span> </div>
        <div className="input-group my-4 w-100">
          <button className={`btn btn-warning btn-lg  mx-auto ${disableBtn ? "disabled":""} `}>{textLang.submitBtn}</button>
        </div>
      </form>
    </section>
  );
};
export default Gneral;

// new Date(Date.UTC(1998,09-1,21)); 