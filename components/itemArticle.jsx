import { useState,useRef } from "react";
import Bounce from "react-reveal/Bounce";

import StyleItem from "../styles/ItemArticle.module.css";
import Image from "next/image";
import Link from "next/Link";
import { Lang,TranslateCategory,TranslateProduct} from "../plugins/lang.js";
 
import { myLoader } from "../plugins/imgLoader";
 
const ItemArticle =  ({ category, product }) => {
  const translateProduct = TranslateProduct([
    ...product, 
  ]);

  const elementDimension = useRef("");
   
   const textLang = Lang().product;
    
  const toUseCategory = TranslateCategory(category);

  return (
    <main className="h-100">
      <h2 className="mx-auto fw-lighter"> {textLang.title}</h2>

      {[...toUseCategory].map((itemsCategory, key) => (
        <section key={key}>
          <span className="w-100 d-flex justify-content-around my-4">
            <hr className="w-100" />
            <h3 className={StyleItem.collectionText}>
              {itemsCategory.title.toUpperCase()}
            </h3>
            <hr className="w-100" />
          </span>
          <Bounce left>
            <ul className={StyleItem.allPosts}>
              {[...translateProduct].filter(p=> p.category.id == itemsCategory.id)
              .map((product) => (
                  <li key={product.id}>
                    <Link href={`/product/${product.id}`}>
                      <a className="text-reset text-decoration-none">
                    <div
                    
                      className={StyleItem.ImgCartDiv}
                      ref={elementDimension}
                    >
                      <Bounce bottom>
                        <Image
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
                       <div className={StyleItem.starSpan}>
                        <button className="btn btn-warning btn-sm w-100"><i className="me-2 bi bi-star"></i> {textLang.star} </button>
                       </div>
                    </div>
                    </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </Bounce>
        </section>
      ))}
    </main>
  );
};

export default ItemArticle;
 /*
client -----> 
            products
             likes
.
product : ----> clients
 

 */