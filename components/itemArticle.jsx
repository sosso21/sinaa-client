
import Bounce from "react-reveal/Bounce";

import StyleItem from "../styles/ItemArticle.module.css";
import {MdBox,LgBox,SmBox }  from "./boxs"
import { Lang,TranslateCategory,TranslateProduct} from "../plugins/lang.js";
 
import { myLoader } from "../plugins/imgLoader";
 
const ItemArticle =  ({ category, product }) => {
  const translateProduct = TranslateProduct([
    ...product, 
  ]);

   
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
              .map((product) => <SmBox product={product}/> )}
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