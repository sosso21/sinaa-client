import { useState, useEffect } from "react";
import styleProfil from "../../styles/profil.module.css";
import { Lang } from "../../plugins/lang.js";
import wilaya from "../../store/wilaya.js";

const Adress = () => {
  const textLang = Lang().adress;
  

  const [user, setUser] = useState("");

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("userInfo"));
    setUser(sessionUser); 
  }, []);
  

  return (
    <section>
     
     <h2 className="w-100 text-center my-4  fw-lighter">{textLang.title}</h2>
      <form className="w-100 my-4 mx-auto input-group">


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
            {wilaya.map((i,key)=><option value={i}>{`${key+1} - ${i}`} </option>)}
          </select>
        </div>



        <div className="w-100 my-4 d-block text-center">
            <button className="btn btn-lg btn-warning mx-auto" > {textLang.submitBtn} </button>
        </div>
      </form>
      
    </section>
  );
};
export default Adress;
