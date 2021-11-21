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
import { Lang, TranslateCategory } from "../../plugins/lang.js";
import {UploadFile} from "./UploadFile"

  import {GetInputHtml,GetSelectHtml} from "./GetFormHtml.js"

  export const PutSupInfo = ({Formular,data ,setData}) => {
    
    if (Formular == "Job") {
      if (data.work_proposal == "request") {

        
  const handleChange = (e) => {
    if (e.target.files.length ) {
      
      setData({
        ...data,
        _Cv_link:{
          _id: Date.now(),
          progress:0,
          url:"",
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0] 

        }
      })
 
    }
  };
  
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
 
 <div className="mx-auto d-block">

             { !data._Cv_link ? <UploadFile
              icon="bi bi-file-earmark-richtext"
              handleUploadFile={handleChange}
              /> : <i className="py-2 px-2 mx-4 rounded btn-lg btn-dark d-flex justify-content-between"><span>{(data._Cv_link || {raw:{name:""}}).raw.name} </span> <span onClick={()=>setData({...data,_Cv_link:""}) } className="bi bi-x  text-danger my-auto btn "></span> </i> 
              }
              </div> 
              
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
               data.service_category &&  [...TranslateCategory(service_category)].filter(i => [...data.service_category].includes(i.slug)).map((i, key) => <li key={key} className="list-group-item"><i
               onClick={() =>
                 setData({
                   ...data,
                   service_category: [...data.service_category].filter((item) => item != i.slug),
                 })
               }
               className="btn mx-2 bi bi-x"
             ></i>
             {i.title} </li>
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