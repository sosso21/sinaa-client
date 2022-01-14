import { useState, useEffect } from "react";
import styleProfil from "../../styles/profil.module.css";
import PassWord from "../../pages/password.js";
import { Lang } from "../../plugins/lang.js";
import submitImage from "../../plugins/CompressImageNSend.js";
import Bounce from "react-reveal/Bounce";
import Error from "../error.jsx";

const Security = ({ changeInfoUser }) => {
  const textLang = Lang().profilSecurity;

  const [user, setUser] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState("");
  const [card, setCard] = useState([]);

  useEffect(() => {
    setUser({ ...JSON.parse(sessionStorage.getItem("userInfo")), pass: "" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableBtn(true);

    fetch(process.env.URLSERVER + "/api/EditEmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        lang: localStorage.getItem("lang"),
        email: user.email,
        pass: user.pass,
        token: localStorage.getItem("token"),
      }).toString(),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            setErr({ success: textLang.successMsg + user.email });
          } else if (result.error == "disconnect") {
            localStorage.clear("token");
            sessionStorage.clear("userInfo");
            router.push("/");
          } else if (result.error) {
            const text = textLang.error.filter(
              (i) => i.errslug == result.error
            )[0];
            setErr({ error: text ? text.msg : "error" });
          }
        },
        (err) => {
          console.log({ error: err });
        }
      );
    setDisableBtn(false);
  };

  const handleAddCard = (e) => { 
    if (
      e.target.files.length &&
      ![...card].filter((i) => i.raw.name == e.target.files[0].name).length
    ) {
      const _id = Date.now();
      setCard([
        ...card,
        {
          _id: _id,
          progress: 0,
          url: "",
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0],
        },
      ]);
    }
  };

  const handleSubmitCard = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    let urls = [];
    for (let index = 0; index < card.length; index++) {
      const element = card[index];
      const response = await submitImage(element.raw, false);

      urls = [...urls, { card: response.url }];
    }

    const result = await changeInfoUser({ identity_card: urls });
    if (result.success) {
      setUser(result.success);
    } else {
      console.log(result.msg);
    }
    setDisableBtn(false);
  };

  return (
    <section>
      
{(user.status != "confirmed")&& (
        <div className="w-100 text-center">
          <h2 className="mx-auto my-2 fw-lighter">
               {textLang.identity.title}
              </h2>

          {( user.waiting_to_confirm!=1) ? (
            <>
              <p className="mx-auto">{textLang.identity.description} </p>

              <div className="w-100 d-flex justify-content-center">
                <ul className="w-50 mx-1">
                  {[...card].map((i) => 
                    <Bounce left>
                      <li
                        className="btn-dark btn btn-lg my-1 mx-auto  d-flex justify-content-between"
                        key={i._id}
                      >
                        <span className=" text-truncate"> {i.raw.name} </span>
                        <i
                          onClick={() =>
                            setCard([...card].filter((ii) => ii != i) || '' )
                          }
                          className="mx-22 bi bi-x"
                        >
                          
                        </i> 
                      </li> 
                    </Bounce>
                  )}
                </ul>

                <span className="d-flex flex-column">
                  <label
                    className="btn btn-lg btn-primary  w-100 my-1 mx-auto"
                    htmlFor="fileUpdate"
                  >
                    <span>{textLang.identity.add}</span>
                    <i className="mx-2 bi bi-box-arrow-up"></i>
                    <input
                      id="fileUpdate"
                      onChange={handleAddCard}
                      value=""
                      type="file"
                      className="d-none"
                    />
                  </label>

                  <button
                    onClick={handleSubmitCard}
                    className={`w-100 mx-auto my-1 btn btn-lg btn-warning ${
                      ![...card].length || !!disableBtn ? "disabled" : ""
                    }`}
                  >
                    {textLang.identity.send}
                  </button>
                </span>
              </div>
            </>
           ): <div>
             <i style={{fontSize:"5rem"} } className="bi bi-clock-history"></i>
             <p> {textLang.identity.waiting}</p>
           </div> }
        </div>
      ) }

      <form
        onSubmit={handleSubmit}
        className="w-100 my-4 input-group d-flex flex-column flex-wrap"
      >
        <h2 className="w-100 text-center my-4  fw-lighter">{textLang.title}</h2>

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

        <div className="input-group">
          <span className=" mx-auto">
            <Bounce top when={!disableBtn && err}>
              
              <Error response={err} />
            </Bounce>
          </span>
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

      <hr className="w-100 mx-4  d-block border border-primary my-4" />

      <PassWord />
    </section>
  );
};
export default Security;
