import { useState, useEffect } from "react";
import styleProfil from "../../styles/profil.module.css";
import PassWord from "../../pages/password.js";
import { Lang } from "../../plugins/lang.js";
 
const Security = () => {
  const textLang = Lang().profilSecurity;

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("userInfo"))); 
  }, []);
  

  return (
    <section>
     
       <h2 className="w-100 text-center my-4  fw-lighter">{textLang.title}</h2>
      <form className="w-100 my-4 mx-auto input-group">


       <div className="my-4 mx-auto">
          <label htmlFor="email">
            {textLang.email}
            <input
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="emial"
              className="form-control "
              placeholder={textLang.pOemail}
              required
            />
          </label>
        </div>
        <div className="w-100 my-4 d-block text-center">
            <button className="btn btn-lg btn-warning mx-auto" > {textLang.submitBtn} </button>
        </div>
      </form>
      
      <hr className="w-100 mx-4  d-block border border-primary my-4" />

      <PassWord/>
    </section>
  );
};
export default Security;
