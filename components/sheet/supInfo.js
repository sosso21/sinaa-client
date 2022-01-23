
import { Lang, TranslateCategory } from "../../plugins/lang.js";

import {
    profession,
    diploma,
    sector_work,
    region,
    Mark,
    typestate,
    vehicle,
    transport_service,
    formation_category,
    sector_product,
    service_category,
  } from "../../store/formularSchema";
 


const GetSupInfo = ({post}) => {
  
    const formularType = post.category.format_profuct || "Divers";

    const textLang = Lang().sheet.GetSupInfo;

    if (formularType == "Job") {
      if (post.work_proposal == "request") {
        const postProfession = TranslateCategory(
          profession.filter((i) => i.slug == post.profession)
        )[0] || { title: "" };
        const postDiploma = TranslateCategory(
          diploma.filter((i) => i.slug == post.diploma)
        )[0] || { title: "" };

        return (
          <ul className="list-group  w-100 d-flex justify-content-center align-content-center align-content-center flex-wrap">
            <li className="list-group-item bg-transparent w-auto">
              Métier : <strong>{postProfession.title} </strong>
            </li>
            <li className="list-group-item bg-transparent w-auto">
              Diplome : <strong>{postDiploma.title} </strong>
            </li>
            <li className="list-unstyled w-auto">
              <a
                href={post.cv_link}
                target="_blank"
                className="px-4 btn btn-sh btn-warning w-100"
              >
                {textLang.seeCV}
              </a> 
            </li>
          </ul>
        );
      }
      if (post.work_proposal == "offer") {
        const postProfession = TranslateCategory(
          profession.filter((i) => i.slug == post.profession)
        )[0] || { title: "" };
        const postSector_work = TranslateCategory(
          sector_work.filter((i) => i.slug == post.sector_work)
        )[0] || { title: "" };
        const postRegion = TranslateCategory(
          region.filter((i) => i.slug == post.region)
        )[0] || { title: "" };

        return (
          <ul className="list-  w-100 d-flex justify-content-center align-content-center align-content-center flex-wrap">
            <li className="list-group-item bg-transparent w-auto">
              Métier : <strong>{postProfession.title} </strong>
            </li>
            <li className="list-group-item bg-transparent w-auto">
              {textLang.sector} : <strong>{postSector_work.title} </strong>
            </li>
            <li className="list-group-item bg-transparent w-auto">
             {textLang.name_society}: <strong> {post.society} </strong>
            </li>
            <li className="list-group-item bg-transparent w-auto">
              {textLang.recrutement_type} : <strong> {postRegion.title} </strong>
            </li>
          </ul>
        );
      }
    } else if (formularType == "Item_and_Equipment") {
      const postMark = Mark.filter((i) => i.slug == post.Mark)[0] || {
        title: "other",
      };
      
      const postTypestate = TranslateCategory(
        typestate.filter((i) => i.slug == post.typestate)
      )[0] || { title: "" };

      return (
        <ul className="list-  w-100 d-flex justify-content-center align-content-center align-content-center flex-wrap">
          <li className="list-group-item bg-transparent w-auto">
            {textLang.mark} : <strong>{postMark.title}</strong>
          </li>
          <li className="list-group-item bg-transparent w-auto">
           {textLang.typeArticle} : <strong>{postTypestate.title} </strong>
          </li>
        </ul>
      );
    } else if (formularType == "Transport") {
      const postRegion = TranslateCategory(
        region.filter((i) => i.slug == post.region)
      )[0] || { title: "" };
      

      const postTransport_service = TranslateCategory(
        transport_service.filter((i) => i.slug == post.transport_service)
      )[0] || { title: "" };
      const postVehicle = TranslateCategory(
        vehicle.filter((i) => i.slug == post.vehicle)
      )[0] || { title: "" };

      return (
        <ul className="list-  w-100 d-flex justify-content-center align-content-center align-content-center flex-wrap">
          <li className="list-group-item bg-transparent w-auto">
            {textLang.vehicle} : <strong>{postVehicle.title}</strong>
          </li>
          <li className="list-group-item bg-transparent w-auto">
            {textLang.service} : <strong>{postTransport_service.title} </strong>
          </li>
          <li className="list-group-item bg-transparent w-auto">
            
            {textLang.region} : <strong> {postRegion.title} </strong>
          </li>
        </ul>
      );
    } else if (formularType == "Formation") {
      const postFormation_category = TranslateCategory(
        formation_category.filter((i) => i.slug == post.formation_category)
      )[0] || { title: "" };

      return (
        <ul className="list-group  w-100 d-flex justify-content-center align-content-center align-content-center flex-wrap">
          <li className="list-group-item bg-transparent w-auto">
            {textLang.formationtype} : <strong>{postFormation_category.title}</strong>
          </li>
        </ul>
      );
    } else if (formularType == "Product") {
      const postSector_product = TranslateCategory(
        sector_product.filter((i) => i.slug == post.sector_product)
      )[0] || { title: "" };

      return (
        <ul className="list-  w-100 d-flex justify-content-center align-content-center align-content-center flex-wrap">
          <li className="list-group-item bg-transparent w-auto">
            {textLang.sector} : <strong>{postSector_product.title}</strong>
          </li>
        </ul>
      );
    } else if (formularType == "Service") {
      let arr = [];
      post.service_category.map((ii) => {
        arr = [
          ...arr,
          TranslateCategory(
            service_category.filter((i) => i.slug == ii.category)
          )[0] || { title: "" },
        ];
      });

      return (
        <ul className="list-  w-100 d-flex justify-content-center align-content-center align-content-center flex-wrap">
          <li className="list-group-item bg-transparent w-auto">
            {textLang.service_type} : 
            <strong>
              {arr.map((i, key) => i.title + (1 + key == arr.length || " / "))}
            </strong>
          </li>
        </ul>
      );
    }
  };

  export default GetSupInfo