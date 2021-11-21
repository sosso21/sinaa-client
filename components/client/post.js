import { useState, useEffect } from "react";
import { schema, work_proposal } from "../../store/formularSchema";
import styleClient from "../../styles/profil.module.css";
import myLoader from "../../plugins/imgLoader.js";
import { GetInputHtml, GetSelectHtml } from "./GetFormHtml.js";
import { PutSupInfo } from "./PutSupInfo";
import { UploadFile } from "./UploadFile";
import { Lang, TranslateCategory } from "../../plugins/lang.js";
import { IFrameYoutube } from "./iFrameYoutube";
import Image from "next/image";
import submitImage from "../../plugins/CompressImageNSend.js";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Error from "../error.jsx";
import wilaya from "../../store/wilaya.js";

const Post = ({ _category = [] }) => {
  const category = TranslateCategory(_category);

  const [step, setStep] = useState({n:1,next:true})
  const [Formular, setFormular] = useState("");
  const [adress, setAdress] = useState("");
  const [contact, setContact] = useState("");
  const [Images, setImages] = useState([]);
  const [Ytb, setYtb] = useState("");

  const textLang = Lang().client_space.post;

  const [parent_category, setParent_category] = useState([]);
  const [data, setData] = useState("");

  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState("");

  const childrenCategory = (
    actual_category = null,
    all = [],
    _formular = " Divers"
  ) => {
    if (actual_category == null) {
      
      return [...all].filter(
        (i) => i.parent_category_list == null && i.format_profuct == _formular
      );
    }

    const parent_category_list =
      (actual_category.parent_category_list || { categories: null })
        .categories || [];

    const children = [...all].filter((i) => {
      const all_parent_category_list =
        (i.parent_category_list || { categories: null }).categories || null;
      if (!all_parent_category_list) {
        return false;
      }
      for (let index = 0; index < parent_category_list.length; index++) {
        const element = parent_category_list[index];
        if (
          !!all_parent_category_list.filter((item) => element._id == item._id)
            .length
        ) {
          return false;
        }
      }
      if (
        !all_parent_category_list.filter((i) => actual_category._id == i._id)
          .length ||
        parent_category_list.length + 1 != all_parent_category_list.length ||
        i.format_profuct != _formular
      ) {
        return false;
      } else {
        return true;
      }
    });
    return children;
  };

  const addNewAdress = () => {
    if (adress.wilaya && adress.commune) {
      const dataAdress = data.adress || [];
      setData({
        ...data,
        adress: [
          ...dataAdress,
          { wilaya: adress.wilaya, commune: adress.commune },
        ],
      });
      setAdress({ wilaya: "", commune: "" });
    } else {
      setAdress({ ...adress, err: "champs incomplet" });
    }
  };
  const addNewEmail = () => {
    const email = contact.email || "";
    if (email.includes("@") && email.includes(".")) {
      const dataEmail = data.email || [];
      !dataEmail.includes(email) &&
        setData({ ...data, email: [...dataEmail, email] });
      setContact({ ...contact, email: "", emailErr: "" });
    } else {
      setContact({ ...contact, emailErr: "E-mail invalide" });
    }
  };

  const addNewPhone = () => {
    const phone = contact.phone || "";
    if (phone.length >= 8 && phone.length <= 9) {
      const dataPhone = data.phone || [];
      !dataPhone.includes(phone) &&
        setData({ ...data, phone: [...dataPhone, "+213" + phone] });
      setContact({ ...contact, phone: "", phoneErr: "" });
    } else {
      setContact({ ...contact, phoneErr: "Numéro invalide" });
    }
  };

  const addNewVideo = () => {
    const link = Ytb.link || "youtube";

    const regExp =/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

    const match = link.match(regExp);

    if (match && match[1].length == 11) {
      const datalink = data.video || [];
      !datalink.includes(link) &&
        setData({ ...data, video: [...datalink, link] });
      setYtb("");
    } else {
      setYtb({ ...Ytb, err: "Liens invalide" });
    }
  };

  const handleChange = (e) => {
    if (
      e.target.files.length &&
      !Images.filter((i) => i.raw.name == e.target.files[0].name).length
    ) {
      const _id = Date.now();
      setImages([
        ...Images,
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

  return (
    <section className="min-vh-100">
      <h2 className="w-100 my-4 text-center d-block fw-lighter">
        {textLang.addPost}
      </h2>

<Fade when={step.n ==1 } right>
      <section className={(step.n ==1)?"min-vh-100 d-flex flex-column":"d-none" }>
        
          <div className="form-group">
            <GetInputHtml
              id="titleProduct"
              text="Titre"
              onChange={(value) => setData({ ...data, title: value })}
              value={data.title}
              labelClassName="w-100"
            />
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <ul className="mx-auto list-group list-group-flush">
              {(data.adress || []).map((i, k) => (
                <Bounce top>
                  <li key={k} className="list-group-item">
                    <i
                      onClick={() =>
                        setData({
                          ...data,
                          adress: [...data.adress].filter((item) => item != i),
                        })
                      }
                      className="btn mx-2 bi bi-x"
                    ></i>
                    <i className="mx-2 bi bi-geo-alt-fill"></i>
                    {i.wilaya + " - " + i.commune}
                  </li>
                </Bounce>
              ))}
            </ul>
          </div>

          <div className="form-group my-4">
            <label htmlFor="adress">Adresse</label>
            <span className="d-flex justify-content-center align-content-center">
              <select
                id="adress"
                className="mx-auto form-select"
                value={adress.wilaya}
                onChange={(e) =>
                  setAdress({ ...adress, err: "", wilaya: e.target.value })
                }
              >
                <option> Saosossez la willaya </option>
                {wilaya.map((i, index) => (
                  <option key={index} value={i}>
                    {`${+index + 1} - ${i}`}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="commune"
                value={adress.commune}
                onChange={(e) =>
                  setAdress({ ...adress, err: "", commune: e.target.value })
                }
                onKeyPress={(e) => e.key === "Enter" && addNewAdress()}
              />
              <i
                onClick={() => addNewAdress()}
                className="btn btn-primary bi bi-calendar2-plus-fill"
              ></i>
            </span>
          </div>

          <Bounce when={!!adress.err} bottom>
            <div
              className={
                !!adress.err
                  ? "form-group text-center my-2 w-100 alert alert-danger"
                  : "d-none"
              }
            >
              {adress.err}
            </div>
          </Bounce>

          <div className="mt-4 d-flex justify-content-center">
            <ul className="mx-auto list-group list-group-flush">
              {(data.email || []).map((i, k) => (
                <Bounce top>
                  <li key={k} className="list-group-item">
                    <i
                      onClick={() =>
                        setData({
                          ...data,
                          email: [...data.email].filter((item) => item != i),
                        })
                      }
                      className="btn mx-2 bi bi-x"
                    ></i>
                    <i className="mx-2 bi bi-envelope-fill"></i> {i}
                  </li>
                </Bounce>
              ))}
            </ul>
          </div>

          <div className="form-group my-4">
            <label htmlFor="email">E-mail(s)</label>
            <span className="d-flex justify-content-center align-content-center">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ajoutez un nouvel email"
                onChange={(e) =>
                  setContact({
                    ...contact,
                    emailErr: "",
                    email: e.target.value,
                  })
                }
                value={contact.email}
                onKeyPress={(e) => e.key === "Enter" && addNewEmail()}
              />
              <i
                onClick={addNewEmail}
                className="btn btn-primary bi bi-calendar2-plus-fill"
              ></i>
            </span>

            <Bounce when={!!contact.emailErr} bottom>
              <div
                className={
                  !!contact.emailErr
                    ? "form-group text-center my-2 w-100 alert alert-danger"
                    : "d-none"
                }
              >
                {contact.emailErr}
              </div>
            </Bounce>
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <ul className="mx-auto list-group list-group-flush">
              {(data.phone || []).map((i, k) => (
                <Bounce top>
                  <li key={k} className="list-group-item">
                    <i
                      onClick={() =>
                        setData({
                          ...data,
                          phone: [...data.phone].filter((item) => item != i),
                        })
                      }
                      className="btn mx-2 bi bi-x"
                    ></i>
                    <i className="mx-2 bi bi-telephone-fill"></i> {i}
                  </li>
                </Bounce>
              ))}
            </ul>
          </div>

          <div className="form-group my-4">
            <label htmlFor="phone">Téléphone(s)</label>
            <span className="d-flex justify-content-center align-content-center">
              <i className="h-100 my-auto mx-1">+213</i>
              <input
                type="phone"
                className="form-control"
                id="phone"
                placeholder="saisissez un vouveau téléphone"
                onChange={(e) =>
                  setContact({
                    ...contact,
                    phoneErr: "",
                    phone: e.target.value,
                  })
                }
                value={contact.phone}
                onKeyPress={(e) => e.key === "Enter" && addNewPhone()}
              />
              <i
                onClick={addNewPhone}
                className="btn btn-primary bi bi-calendar2-plus-fill"
              ></i>
            </span>

            <Bounce when={!!contact.phoneErr} bottom>
              <div
                className={
                  !!contact.phoneErr
                    ? "form-group text-center my-2 w-100 alert alert-danger"
                    : "d-none"
                }
              >
                {contact.phoneErr}
              </div>
            </Bounce>
          </div>

          <div className="mt-4 d-flex justify-content-center flex-wrap">
            {(data.video || []).map((i) => (
              <Bounce top>
                <div className={styleClient.ifram}>
                  <IFrameYoutube className="w-100 h-100" src={i} />
                  <i
                    onClick={(e) =>
                      setData({
                        ...data,
                        video: [...data.video].filter((item) => i != item),
                      })
                    }
                    className="btn btn-sm btn-outline-danger bi bi-trash-fill"
                  ></i>
                </div>
              </Bounce>
            ))}
          </div>

          <div className="form-group my-4">
            <label htmlFor="urlYoutube">Lien youtube:</label>
            <span className="d-flex justify-content-center align-content-center">
              <input
                type="text"
                className="form-control"
                id="urlYoutube"
                placeholder="Ajoutez une Nouvelle video youtube"
                onChange={(e) =>
                  setYtb({
                    ...Ytb,
                    err: "",
                    link: e.target.value,
                  })
                }
                value={Ytb.link}
                onKeyPress={(e) => e.key === "Enter" && addNewVideo()}
              />
              <i onClick={addNewVideo} className="btn btn-primary d-flex">
                {" "}
                <i className="bi bi-plus"></i> <i className="bi bi-youtube"></i>
              </i>
            </span>

            <Bounce when={!!Ytb.err} bottom>
              <div
                className={
                  !!Ytb.err
                    ? "form-group text-center my-2 w-100 alert alert-danger"
                    : "d-none"
                }
              >
                {Ytb.err}
              </div>
            </Bounce>
          </div>

          <div className="w-100 d-flex justify-content-center align-content-center align-content-center flex-wrap my-4">
            {[...Images].map((i) => (
              <Fade top>
                <div className={styleClient.ParentImg}>
                  <Image
                    className={"my-auto btn mx-4"}
                    loader={({ src }) => src}
                    src={i.preview}
                    alt={i._id}
                    width={128}
                    height={128}
                    objectFit="cover"
                    layout="fixed"
                  />
                  <i
                    onClick={() =>
                      setImages(Images.filter((e) => e._id != i._id))
                    }
                    className="btn btn-sm btn-outline-danger bi bi-trash-fill"
                  ></i>
                </div>
              </Fade>
            ))}
            <UploadFile
              icon="bi bi-image-fill"
              handleUploadFile={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="w-100 form-control"
              id="description"
              rows="10"
              placeholder="Decrivez et détaillez  votre produit"
            ></textarea>
          </div>
        
      </section>
      </Fade>


      <Fade when={step.n ==2} top>
      <section className={(step.n ==2)?"min-vh-100 d-flex justify-content-center align-items-center align-content-center flex-column":"d-none"}>
        <Bounce left>
          <GetSelectHtml
            id="rubrique"
            text="Rubrique :"
            onChange={(value) => {
              setParent_category([]);
              setFormular(value);
            }}
            value={Formular}
            options={schema}
          />
        </Bounce>

        <Bounce when={Formular == "Job"} right>
          {Formular == "Job" ? (
            <GetSelectHtml
              id="work_proposal"
              text="Proposition de travail :"
              onChange={(value) => {
                setData({ ...data, work_proposal: value });
              }}
              value={data.work_proposal}
              options={work_proposal}
            />
          ) : (
            ""
          )}
        </Bounce>

        <Bounce when={!!Formular.length} bottom>
          <div className="my-4 w-100 d-flex justify-content-center align-items-center flex-wrap">
            {parent_category.map((i, key) => (
              <span key={key}>
                <i className="mx-auto btn-lg">
                  {i.title}
                  <i
                    className="mx-1 btn-outline-danger bi bi-x"
                    onClick={() =>
                      setParent_category(
                        parent_category.filter((i, k) => k < key)
                      )
                    }
                  ></i>
                  <i className="mx-2 bi bi-chevron-right"></i>
                </i>
              </span>
            ))}
          </div>
          <Bounce
            when={
              !!childrenCategory(
                parent_category[parent_category.length - 1],
                category,
                Formular
              ).length && !(Formular == "Job" && !data.work_proposal)
            }
            left
          >
            <GetSelectHtml
              id="category"
              text={!!parent_category.length ? "Sous Categorie:" : "Categorie"}
              onChange={(value) =>
                setParent_category([
                  ...parent_category,
                  category.filter((i) => i.slug == value)[0],
                ])
              }
              value=""
              options={childrenCategory(
                parent_category[parent_category.length - 1],
                category,
                Formular
              )}
              labelClassName="d-block my-4"
              SelectClassName="mx-auto form-select btn btn-primary"
              translate={false}
            />
          </Bounce>
        </Bounce> 
      </section>
      </Fade>

<Fade when={step.n ==3 } bottom>
      <section className={(step.n ==3)?"min-vh-100 d-flex justify-content-center align-items-center align-content-center flex-column":"d-none" }>
        <PutSupInfo Formular={Formular} data={data} setData={setData} />
    </section>
      </Fade>

      <section className="my-2 w-100 d-flex justify-content-between" >
        <button onClick={()=>setStep({next:true, n:step.n-1}) } className={"btn btn-lg bi bi-chevron-compact-left "+((step.n!=1) ? "btn-primary":"disabled btn-secondary" ) }></button>
        
        {(step.n == 3)?<button className={"btn btn-lg "+((!!step.next)?"btn-warning text-light":"btn-disable disabled" ) }>Submit </button>
        :<button  onClick={()=>setStep({next:true, n:step.n+1}) }  className={"btn btn-lg bi bi-chevron-compact-right "+((!!step.next)?"btn-primary":"disabled btn-secondary text-light" ) }></button>}

      </section>
    </section>
  );
};
export default Post;
