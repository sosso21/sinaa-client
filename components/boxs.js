import {useRef } from "react";

import Image from "next/image";
import Link from "next/Link";
import Bounce from "react-reveal/Bounce";
import StyleItem from "../styles/ItemArticle.module.css";
 

import { Lang} from "../plugins/lang.js";
 
 
const DeleteNEdit =({id})=>{
  return <span className={StyleItem.editableBtn}>
    <Link href={`/client/post?edit=${id}`}>
    <a className="btn btn-outline-primary btn-sm bi bi-pencil-fill"></a>
    </Link>
    <i className="btn btn-outline-danger btn-sm bi bi-trash-fill"></i>
  </span>
}

const ButtonStar = ()=>{
  const textLang = Lang().product;
  return ( <button className="btn btn-warning btn-sm w-100"><i className="me-2 bi bi-star"></i> {textLang.star} </button>)
}

export const MdBox=({product,editable=false})=>{
  
  const textLang = Lang().product;
    const elementDimension = useRef("");

    return (
        <li className={StyleItem.mdPost} key={product.id}>
          <Link href={`/product/${product.id}`}>
            <a title={product.title} className="text-reset  text-decoration-none">
          <div   className={StyleItem.ImgCartDiv}
            ref={elementDimension}
          >
            <Bounce bottom>
              <Image
              className="rounded"
                loader={({ src }) => {
                  return src;
                }}
                src={product.images[0].image}
                alt={product.title}
                width={
                  elementDimension.current
                    ? Math.round(
                        elementDimension.current.clientHeight
                      )
                    : 200
                }
                height={
                  elementDimension.current
                    ? Math.round(
                        elementDimension.current.clientHeight
                      )
                    : 200
                }
                objectFit="cover"
                layout="fixed"
              />
            </Bounce>
          {!!product.price && <strong className={StyleItem.soldeContent}>
            {product.price} {textLang.currency}
          </strong>}
          {
            editable && <DeleteNEdit id={product.id} />
          }
          </div>
          <div>
            <h4 className={StyleItem.titleProduct}>
              {product.title}
            </h4>
            <p className="my-1 text-secondary text-truncate">
            <i className="small  mx-1 bi bi-person"></i> {product.author.username}
            <i className={(product.author.status == "confirmed") && ("bi bi-check-circle-fill text-success ")}></i>
             </p>
            <i className="bi bi-clock-history me-2"></i>  {product.createdAt_text}
             <div className={StyleItem.starSpan }>
                
             <ButtonStar />
               
             </div>
          </div>
          </a>
          </Link>
        </li>)
}


export const LgBox=({product,editable= false})=>{
  
  const textLang = Lang().product;
    const elementDimension = useRef("");

    return (
        <li  className={StyleItem.LgPost } key={product.id}>
          <Link href={`/product/${product.id}`}>
            <a title={product.title} className={StyleItem.boxLgLink}>
          <div   className={StyleItem.ImgCartDivLg}
            ref={elementDimension}
          >
            <Bounce bottom>
              <Image
              className="rounded"
                loader={({ src }) => {
                  return src;
                }}
                src={product.images[0].image}
                alt={product.title}
                width={
                  elementDimension.current
                    ? Math.round(
                        elementDimension.current.clientHeight
                      )
                    : 300
                }
                height={
                  elementDimension.current
                    ? Math.round(
                        elementDimension.current.clientHeight
                      )
                    : 300
                }
                objectFit="cover"
                layout="fixed"
              />
            </Bounce>
          {!!product.price && <strong className={StyleItem.soldeContent}>
            {product.price} {textLang.currency}
          </strong>}
          {
            editable && <DeleteNEdit id={product.id} />
          }
          </div>
          <div className={StyleItem.CardBoxLg} >
            <h4 className='mw-100  fs-5'>
              {product.title}
            </h4>
            <p className="my-1 text-secondary text-truncate">
            <i className="small  mx-1 bi bi-person"></i> {product.author.username}
            <i className={(product.author.status == "confirmed") && ("bi bi-check-circle-fill text-success ")}></i>
             </p>
             <p> 
            <i className="bi bi-clock-history me-2"></i>  {product.createdAt_text}</p>
             
             </div>
             <div className={StyleItem.CardBoxLg} >
             <ButtonStar />
             <p  className={StyleItem.paragraphDdescription} >{product.description} </p>
          </div>
          </a>
          </Link>
        </li>)
}
 

export const SmBox=({product,editable=false})=>{
  const textLang = Lang().product;
    const elementDimension = useRef("");

    return (
        <li className={StyleItem.mdPost +" "+StyleItem.SmPost } key={product.id}>
          <Link href={`/product/${product.id}`}>
            <a title={product.title} className="text-reset  text-decoration-none">
          <div   className={StyleItem.ImgCartDiv+" "+StyleItem.ImgCartDivSm }
            ref={elementDimension}
          >
            <Bounce bottom>
              <Image
              className="rounded"
                loader={({ src }) => {
                  return src;
                }}
                src={product.images[0].image}
                alt={product.title}
                width={
                  elementDimension.current
                    ? Math.round(
                        elementDimension.current.clientHeight
                      )
                    : 150
                }
                height={
                  elementDimension.current
                    ? Math.round(
                        elementDimension.current.clientHeight
                      )
                    : 150
                }
                objectFit="cover"
                layout="fixed"
              />
            </Bounce>
            <i className="btn btn-outline-warning btn-sm rounded me-2 bi bi-star position-absolute start-0 top-0 shadow"></i>
          {!!product.price && <strong className={StyleItem.soldeContent}>
            {product.price} {textLang.currency}
          </strong>}

          {
            editable && <DeleteNEdit id={product.id} />
          }
          </div>
          <div>
            <h4 className={StyleItem.titleProduct}>
              {product.title}
            </h4>
            
          </div>
          </a>
          </Link>
        </li>)
}
