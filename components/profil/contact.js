import { useState, useEffect } from "react";
import Fade from "react-reveal/fade";
import styleProfil from "../../styles/profil.module.css";
import { Lang } from "../../plugins/lang.js";

const Contact = () => {
  const textLang = Lang().profilContact;

  const [user, setUser] = useState("");
  const [social, setsocial] = useState({
    facebook: false,
    instagram: false,
    twitter: false,
  });

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("userInfo"));
    setUser(sessionUser);
  }, []);

  return (
    <section>
      <h2>{textLang.title}</h2>
      <form className="w-100 my-4 mx-auto input-group">
        <div className="my-4 mx-auto d-block">
          <label htmlFor="phone">
            {textLang.phoneLabel}

            <input
              id="phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              type="tel"
              className="form-control "
              placeholder={textLang.pOPhone}
              required
            />
          </label>
        </div>

        <div className="w-100 d-flex justify-content-around align-content-center flex-wrap my-4 mx-auto">
          <i
            onClick={() => {
              setsocial({ ...social, facebook: !social.facebook });
              setUser({ ...user, facebook: "" });
            }}
            className={`fs-1 bi bi-facebook btn ${
              !!social.facebook ? "text-primary" : "text-secondary"
            }`}
          ></i>
          <i
            onClick={() => {
              setsocial({ ...social, instagram: !social.instagram });
              setUser({ ...user, instagram: "" });
            }}
            className={`fs-1 bi bi-instagram btn ${
              !!social.instagram ? "text-danger" : "text-secondary"
            }`}
          ></i>
          <i
            onClick={() => {
              setsocial({ ...social, twitter: !social.twitter });
              setUser({ ...user, twitter: "" });
            }}
            className={`fs-1 bi bi-twitter btn ${
              !!social.twitter ? "text-info" : "text-secondary"
            }`}
          ></i>
        </div>

        <div className="w-100 d-flex justify-content-around align-content-center flex-wrap my-4 mx-auto">
          <Fade bottom when={!!social.facebook}>
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
          </Fade>

          <Fade bottom when={!!social.instagram}>
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
          </Fade>

          <Fade bottom when={!!social.twitter}>
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
          </Fade>
        </div>

        <div className="w-100 my-4 d-block text-center">
          <button className="btn btn-lg btn-warning mx-auto">
            
            {textLang.submitBtn}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
 