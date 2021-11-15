import { useState, useEffect } from "react";
import styleClient from "../../styles/profil.module.css";
import myLoader from "../../plugins/imgLoader.js";
import { Lang, TranslateCategory } from "../../plugins/lang.js";
import {
  schema,
  work_proposal,
  profession,
  diploma,
  sector_work,
  Mark,
  typestate,
  vehicle,
  transport_service,
  formation_category,
  sector_product,
  service_category,
  region
} from "../../store/formularSchema";
import submitImage from "../../plugins/CompressImageNSend.js";
import Bounce from "react-reveal/Bounce";
import Error from "../error.jsx";
import wilaya from "../../store/wilaya.js";

const Post = ({ _category = [] }) => {
  const category = TranslateCategory(_category);

  const [Formular, setFormular] = useState("");
  const [adress, setAdress] = useState("")
  const textLang = Lang().client_space.post;

  const [parent_category, setParent_category] = useState([]);
  const [data, setData] = useState("");

  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState("");

  const UploadImage = ({ icon, handleSub }) => {
    return (
      <div className="d-flex justify-content-center">
        <label htmlFor="file" className={styleClient.addImgBtn}>
          <i className={"fs-1 " + icon}></i>
          <i className="fs-2 bi bi-plus"></i>
        </label>

        <input
          onChange={(e) => handleSub(e.target.value)}
          type="file"
          className="d-none"
          id="file"
          placeholder="saisissez un vouveau téléphone"
        />
      </div>
    );
  };

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

const addNewAdress=()=>{
if(adress.wilaya && adress.Commune){
  setData({...data,adress:[...data.adress,{wilaya:adress.wilaya ,commune:adress.Commune }]});
  setAdress("")
}else {
  setAdress({...adress,err:"champs incomplet"})
}
}
  //------------
  ///--------------
  //---------------

  const GetSelectHtml = ({ id, text, onChange, value, options,translate=true, labelClassName="mx-2 my-4", SelectClassName = "mx-auto form-select" }) => {
    const opt = translate ? TranslateCategory(options) : options
    return <label className={labelClassName} htmlFor={id}>

      {text}
      <select
        onChange={(e) => onChange(e.target.value)}
        id={id}
        className={SelectClassName}
        value={value}
      >
        <option key="0001">Selectionnez une option</option>
        { [...opt].map((i, key) => (
          <option key={key} value={i.slug}>
            {i.title}
          </option>
        ))}
      </select>
    </label>;
  };

  const GetInputHtml = ({
    id,
    text,
    type = "text",
    onChange,
    value="",
    placeholder = "Saisissez le champ",
    required = true,
    labelClassName ="mx-2 my-4", InputClassname = "mx-auto form-control form-control-lg"
  }) => {
    
    return ( <label className={labelClassName} htmlFor={id} >{text}  - {value}
  
      <input
        type={type}
        onChange={e=>onChange(e.target.value)}
        value={value}
        id={id}
        className={InputClassname}
        placeholder={placeholder}
        required={required}
      />  </label>);
  };

  const PutSupInfo = () => {
    
    if (Formular == "Job") {
      if (data.work_proposal == "request") {
        return (
          <>
            <GetSelectHtml
              id="profession"
              text="profession"
              onChange={(value) => setData({ ...data, profession: value })}
              value={data.profession}
              options={profession}
            />

            <GetSelectHtml
              id="diploma"
              text="diploma"
              onChange={(value) => setData({ ...data, diploma: value })}
              value={data.diploma}
              options={diploma}
            />

            <UploadImage
              icon="bi bi-file-earmark-richtext"
              handleSub={(value) => console.log(value)}
            />
          </>
        );
      }
      if (data.work_proposal == "offer") {

        return (
          <>
            <GetInputHtml
              id="price"
              type="number"
              text="Salaire"
              onChange={(value) => setData({ ...data, price: value })}
              value={data.price}
            />

            <GetSelectHtml
              id="profession"
              text="profession"
              onChange={(value) => setData({ ...data, profession: value })}
              value={data.profession}
              options={profession}
            />

            <GetSelectHtml
              id="sector_work"
              text="Secteur"
              onChange={(value) => setData({ ...data, sector_work: value })}
              value={data.sector_work}
              options={sector_work}
            />

            <GetInputHtml
              id="society"
              text="nom de l'entreprise"
              onChange={(value) => setData({ ...data, society: value })}
              value={data.society}
            />

            <GetSelectHtml
              id="region"
              text="secteur géographique"
              onChange={(value) => setData({ ...data, region: value })}
              value={data.region}
              options={region}
            />

          </>
        );
      }
    } else if(Formular == "Item_and_Equipment") {

      return (
        <>
          <GetInputHtml
            id="price"
            type="number"
            text="prix"
            onChange={(value) => setData({ ...data, price: value})}
            value={data.price}
          />
 
 
          <GetSelectHtml
            id="Mark"
            text="Mark"
            onChange={(value) => setData({ ...data, Mark: value })}
            value={data.Mark}
            options={Mark}
            translate={false}
          />


          <GetSelectHtml
            id="typestate"
            text="etat"
            onChange={(value) => setData({ ...data, typestate: value })}
            value={data.typestate}
            options={typestate}
          />

        </>
      );
    } else if(Formular == "Transport") {

      return (
        <>

          <GetInputHtml
            id="price"
            type="number"
            text="prix"
            onChange={(value) => setData({ ...data, price: value})}
            value={data.price}
          />

          <GetSelectHtml
            id="vehicle"
            text="vehicle"
            onChange={(value) => setData({ ...data, vehicle: value })}
            value={data.vehicle}
            options={vehicle}
          />
          
          <GetSelectHtml
            id="transport_service"
            text="transport service"
            onChange={(value) => setData({ ...data, transport_service: value })}
            value={data.transport_service}
            options={transport_service}
          />
          
          <GetSelectHtml
            id="region"
            text="secteur géographique"
            onChange={(value) => setData({ ...data, region: value })}
            value={data.region}
            options={region}
          />

        </>
      );
    } else if(Formular == "Formation") {

      return (

        <>

          <GetInputHtml
            id="price"
            type="number"
            text="prix"
            onChange={(value) => setData({ ...data, price: value})}
            value={data.price}
          />

          <GetSelectHtml
            id="formation_category"
            text="formation category"
            onChange={(value) => setData({ ...data, formation_category: value })}
            value={data.formation_category}
            options={formation_category}
          />

        </>
      );
    } else if(Formular == "Product") {

      return (
        <>
          <GetInputHtml
            id="price"
            type="number"
            text="prix"
            onChange={(value) => setData({ ...data, price: value})}
            value={data.price}
          />
          <GetSelectHtml
            id="sector_product"
            text="sector product"
            onChange={(value) => setData({ ...data, sector_product: value })}
            value={data.sector_product}
            options={sector_product}
          />
        </>
      );
    } else if(Formular == "Service") {
      const dataService_category =data.service_category || [];
      return (
        <>
          <GetInputHtml
            id="price"
            type="number"
            text="prix"
            onChange={(value) => setData({ ...data, price:value})}
            value={data.price}
          />

          <div className="w-100 d-flex justify-content-center" >
            <ul className="mx-auto list-group list-group-flush">
              {
               data.service_category &&  [...TranslateCategory(service_category)].filter(i => [...data.service_category].includes(i.slug)).map((i, key) => <li key={key} className="list-group-item"> {i.title} </li>
                )
              }
            </ul>
          </div>

          <GetSelectHtml
            id="service_category"
            text="service category"
            onChange={(value) => setData({ ...data,service_category:[...dataService_category,value]}) }
            value=""
            options={service_category}
          />
        </>
      );
    }
    return <GetInputHtml
    id="price"
    type="number"
    text="prix"
    onChange={(value) => setData({ ...data, price:value})}
    value={data.price}
  />
  };

  return (
    <section className="min-vh-100">
      <h2 className="w-100 my-4 text-center d-block fw-lighter">
        {textLang.addPost}{" "}
      </h2>

      <section>
        <form className="w-100">
          <div className="form-group">


            <GetInputHtml
              id="titleProduct"
              text="Titre"
              onChange={(value) => setData({ ...data, title:value})}
              value={data.title}
              labelClassName="w-100"
            />
            
          </div>

          <ul className="mx-auto list-group list-group-flush">
  {(data.adress || []).map((i,k)=> <li key={k} className="list-group-item"> {i.title} </li> ) }
</ul>

          <div className="form-group my-4">
            <label htmlFor="adress">Adresse</label>
            <span className="d-flex justify-content-center align-content-center">
              <select id="adress" className="mx-auto form-select" value={adress.wilaya} onChange={e=> setAdress({...adress,wilaya: e.target.value}) }>
                <option> Saosossez la willaya </option>
                {wilaya.map((i, index) => (
                  <option key={index} value={i}>
                    {`${+index + 1} - ${i}`}{" "}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="form-control"
                id="titleProduct"
                placeholder="Commune"
                value={adress.Commune}
                onChange={e=> setAdress({...adress,Commune: e.target.value}) }
              />
              <i onClick={()=> addNewAdress()} className="btn btn-primary bi bi-calendar2-plus-fill"></i>
            </span>
          </div>

          <div className="form-group my-4">
            <label htmlFor="email">E-mail(s)</label>
            <span className="d-flex justify-content-center align-content-center">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ajoutez un nouvel email"
              />
              <i className="btn btn-primary bi bi-calendar2-plus-fill"></i>
            </span>
          </div>

          <div className="form-group my-4">
            <label htmlFor="phone">Téléphone(s)</label>
            <span className="d-flex justify-content-center align-content-center">
              <input
                type="phone"
                className="form-control"
                id="phone"
                placeholder="saisissez un vouveau téléphone"
              />
              <i className="btn btn-primary bi bi-calendar2-plus-fill"></i>
            </span>
          </div>

          <div className="my-4">
            <UploadImage
              icon="bi bi-image-fill"
              handleSub={(value) => console.log(value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
            onChange={e=>setData({...data,description:e.target.value }) }
              className="w-100 form-control"
              id="description"
              rows="10"
              placeholder="Decrivez et détaillez  votre produit"
            ></textarea>
          </div>
        </form>
      </section>

      <section className="w-100 h-100 d-flex flex-column align-content-center align-items-center justify-content-around">
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
          {
            (Formular == "Job") ? <GetSelectHtml
              id="work_proposal"
              text="Proposition de travail :"
              onChange={(value) => {
                setData({ ...data, work_proposal: value })
              }}
              value={data.work_proposal}
              options={work_proposal}
            /> : ""


          }

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
                ])}
              value=""
              options={childrenCategory(
                parent_category[parent_category.length - 1],
                category,
                Formular
              )}
              labelClassName="d-block my-4"
              SelectClassName="mx-auto form-select btn btn-primary"
            />

          </Bounce>
        </Bounce>
      </section>
      <section  className="d-flex mx-auto px-4 h-100 justify-content-center align-content-center align-items-center flex-wrap">
      <PutSupInfo />

      </section>


    </section>
  );
};
export default Post;
