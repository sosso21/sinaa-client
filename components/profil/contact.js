import { useState, useEffect } from "react";
import Bounce from "react-reveal/Bounce";
import styleProfil from "../../styles/profil.module.css";
import { Lang } from "../../plugins/lang.js";
import Error from "../error.jsx";

const Contact = ({ changeInfoUser }) => {
  const textLang = Lang().profilContact;
  const [_phone, set_phone] = useState("");
  const [user, setUser] = useState("");
  const [social, setsocial] = useState({
    facebook: false,
    instagram: false,
    twitter: false,
  });
  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("userInfo"));
    setUser(sessionUser);
  }, []);

  const handleaddPhone = (e) => {
    e.preventDefault()
    e.stopPropagation();
    
    const value ={phone: _phone };
    const phones = user.phones || [];
    set_phone("");
    if(!!(+_phone)  ){
      
      setUser({
        ...user,
        phones: [...(phones).filter(i=>i.phone!=_phone) ,value],
      });}
  };

  const handleSubmitI = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    const result = await changeInfoUser(user);

    if (result.success) {
      setUser(result.success);
      setErr({ success: result.msg });
    } else {
      setErr({ error: result.msg });
    }
    setDisableBtn(false);
  };

  return (
    <section>
      <h2 className="w-100 text-center my-4  fw-lighter">{textLang.title}</h2>

      <form onSubmit={handleSubmitI} className="my-4 mx-auto input-group">
        <div className="w-100 my-4">
          <ul className="list-group w-auto">
            {[...(user.phones || [])].map((i, k) =>( 
              <Bounce right>
               <li key={k} className="list-group-item  mx-auto ">
               <i className="mx-2 bi bi-telephone"></i> <i>0{+i.phone }</i> <i className="mx-2 bi bi-x" onClick={()=>setUser({...user, phones:[...user.phones ].filter(item =>item!=i)}) }> </i>
              </li>
              </Bounce>)
            )}
          </ul>
        </div>
        <div className="my-4 mx-auto">
          <label htmlFor="phone">
            {textLang.phoneLabel}

            <input
              id="phone"
              value={_phone}
              onChange={(e) => set_phone(e.target.value)}
              type="tel"
              className="form-control "
              placeholder={textLang.pOPhone}
              onKeyPress={e=>((e.key === "Enter") && handleaddPhone(e))}
               
            />
          </label>
          <i
            className="bi bi-box-arrow-up btn btn-primary"
            onClick={handleaddPhone}
          ></i>
        </div>

        <div className="w-100 d-flex justify-content-around align-content-center flex-wrap my-4 mx-auto">
          <i
            onClick={() => setsocial({ ...social, facebook: !social.facebook })}
            className={`fs-1 bi bi-facebook btn ${
              !!social.facebook ? "text-primary" : "text-secondary"
            }`}
          ></i>
          <i
            onClick={() =>
              setsocial({ ...social, instagram: !social.instagram })
            }
            className={`fs-1 bi bi-instagram btn ${
              !!social.instagram ? "text-danger" : "text-secondary"
            }`}
          ></i>
          <i
            onClick={() => setsocial({ ...social, twitter: !social.twitter })}
            className={`fs-1 bi bi-twitter btn ${
              !!social.twitter ? "text-info" : "text-secondary"
            }`}
          ></i>
        </div>

        <div className="w-100 d-flex justify-content-around align-content-center flex-wrap my-4 mx-auto">
          <Bounce bottom when={!!social.facebook}>
            <label htmlFor="facebook">
              {textLang.facebookLabel}

              <input
                id="facebook"
                value={user.facebook}
                onChange={(e) => setUser({ ...user, facebook: e.target.value })}
                type="text"
                className="form-control "
                placeholder={textLang.pONR}
              />
            </label>
          </Bounce>

          <Bounce bottom when={!!social.instagram}>
            <label htmlFor="instagram">
              {textLang.instagramLabel}

              <input
                id="instagram"
                value={user.instagram}
                onChange={(e) =>
                  setUser({ ...user, instagram: e.target.value })
                }
                type="text"
                className="form-control "
                placeholder={textLang.pONR}
              />
            </label>
          </Bounce>

          <Bounce bottom when={!!social.twitter}>
            <label htmlFor="twitter">
              {textLang.twitterLabel}

              <input
                id="twitter"
                value={user.twitter}
                onChange={(e) => setUser({ ...user, twitter: e.target.value })}
                type="text"
                className="form-control "
                placeholder={textLang.pONR}
              />
            </label>
          </Bounce>
        </div>

        <div className="input-group">
          <span className=" mx-auto">
            <Bounce top when={!disableBtn && err}>
              {" "}
              <Error response={err} />{" "}
            </Bounce>
          </span>{" "}
        </div>
        <div className="input-group my-4 w-100">
          <button
            className={`btn btn-warning btn-lg  mx-auto ${
              disableBtn ? "disabled" : ""
            } `}
          >
            {textLang.submitBtn}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
