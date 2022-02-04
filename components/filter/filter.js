import { useState } from "react"
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
import { Lang, TranslateCategory } from "../../plugins/lang";
import {GetInputHtml,GetSelectHtml} from "../client/GetFormHtml"
import wilaya from "../../store/wilaya"

const FilterBar=({_actual_category="",all_category=[]})=>{

    const actual_category = (!!_actual_category && !!all_category.length) ? (all_category.filter(i=> i.slug== _actual_category )[0] || "") : "" ;
    const format_profuct = !!actual_category ? actual_category.format_profuct : "Divers";
    const  work_proposal = (format_profuct == "Job") ? actual_category.format_profuct :"";
    const filterSchema = (format_profuct == "Job")? ((work_proposal == "request") ?["adress","diploma"]:["price","adress", "sector_work", "region"]) : [...schema].filter(i=>i.slug == format_profuct)[0].filter
const [filter, setFilter] = useState([]);
const textLang ={... Lang().client_space.post.input,...Lang().filter};


const handleChange =(value,key=0)=>{
  console.log('value,key:', value,key)
  //--
}

const SupInfo =({data,key=0})=>{
const setData=(value)=> handleChange(value,key);
     
const HTML = {
  q: <GetInputHtml
  id={"q"+key}
  type="text"
  text={textLang.q.title}
  onChange={(value) => setData({ ...data, q: value })}
  value={data.q}
  placeholder={textLang.q.placeOlder}
/>,
  price: <GetInputHtml
    id={"price"+key}
    type="number"
    text={(format_profuct==  "Job")? textLang.salary :textLang.price }
    onChange={(value) => setData({ ...data, price: value })}
    value={data.price}
  />,
adress: <GetSelectHtml
  id={"adress"+key}
  text={textLang.adress}
  onChange={(value) => setData({ ...data, adress: value })}
  value={data.adress}
  options={wilaya.map(ii=>({slug:ii,title:ii}))}
  translate={false}
/>,
service_category:<GetSelectHtml
id={"service_category"+key}
text={textLang.service_category}
onChange={(value) => setData({ ...data, service_category: value })}
value={data.service_category}
options={service_category}
/>,
formation_category:<GetSelectHtml
id={"formation_category"+key}
text={textLang.formation_category}
onChange={(value) => setData({ ...data, formation_category: value })}
value={data.formation_category}
options={formation_category}
/>,
sector_work:<GetSelectHtml
id={"sector_work"+key}
text={textLang.sector_work}
onChange={(value) => setData({ ...data, sector_work: value })}
value={data.sector_work}
options={sector_work}
/>, 
region:<GetSelectHtml
id={"region"+key}
text={textLang.region}
onChange={(value) => setData({ ...data, region: value })}
value={data.region}
options={region}
/>,
diploma:<GetSelectHtml
id={"diploma"+key}
text={textLang.diploma}
onChange={(value) => setData({ ...data, diploma: value })}
value={data.diploma}
options={diploma}
/>,
Mark:<GetSelectHtml
id={"Mark"+key}
text={textLang.Mark}
onChange={(value) => setData({ ...data, Mark: value })}
value={data.Mark}
options={Mark}
/>,
typestate:<GetSelectHtml
id={"typestate"+key}
text={textLang.typestate}
onChange={(value) => setData({ ...data, typestate: value })}
value={data.typestate}
options={typestate}
/>,
sector_product:<GetSelectHtml
id={"sector_product"+key}
text={textLang.sector_product}
onChange={(value) => setData({ ...data, sector_product: value })}
value={data.sector_product}
options={sector_product}
/>,
transport_service:<GetSelectHtml
id={"transport_service"+key}
text={textLang.transport_service}
onChange={(value) => setData({ ...data, transport_service: value })}
value={data.transport_service}
options={transport_service}
/>,
vehicle:<GetSelectHtml
id={"vehicle"+key}
text={textLang.vehicle}
onChange={(value) => setData({ ...data, vehicle: value })}
value={data.vehicle}
options={vehicle}
/>, 
}


return [...filterSchema].map((i,k)=> HTML[i] );

}

  return <section className="m-2">

    
<pre>
{JSON.stringify(filter)}
------ 
{JSON.stringify(filterSchema)}
---
{!filter.length ? "non": "oui"}
      </pre>

    {!filter.length ? <button className="btn tbn-sm btn-warning"><i className="bi bi-filter-left mx-1" onClick={()=>setFilter([{q:""}])}></i> {textLang.btnName} </button> : [...filter].map((i,k)=> <span className="input-group h-100 w-100">  <SupInfo data={filter[k] || {} } key={k} /> </span> )}
   
    </section>
}

export default FilterBar
 