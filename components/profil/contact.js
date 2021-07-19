import { useState, useEffect } from "react";
import styleProfil from "../../styles/profil.module.css";
import { Lang } from "../../plugins/lang.js";
 
const Contact = () => {
  const textLang = Lang().profilSecurity;

  const [user, setUser] = useState("");

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("userInfo"));
    setUser(sessionUser); 
  }, []);
  

  return (
    <section>
     
      <form className="my-4 mx-auto  input-group">
       
      </form>
    </section>
  );
};
export default Contact;
