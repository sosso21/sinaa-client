import { useRef } from "react"
import Bounce from "react-reveal/Bounce";

import StyleItem from "../styles/ItemArticle.module.css";
import Image from "next/image";

const Item = ({Type,products,setCart,total,setTotal,setActiveModaleProduit,setSeeProduit,}) => {
   /*

    const elementDimension = useRef("")
    const handelAddCart = (e, product) => {
        e.preventDefault();
        e.stopPropagation();

        const cart = JSON.parse(localStorage.getItem("cart"));
        let solde = 1;
        product.model = [];
        product.models.map((i) => (product.model = [...product.model, i[0]]));
        if (product.price[1]) {
            solde = (100 - product.price[1]) / 100;
        }
        setTotal(Math.round((total + product.price[0] * solde) * 100) / 100);
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];

            if (product._id === element._id && product.model == element.model) {
                cart[i].count++;
                return setCart(cart);
            }
        }
        product.count = 1;
        setCart([...cart, product]);
    };

    const handleSeeProd = (e, prod) => {
        e.preventDefault();
        e.stopPropagation();
        setSeeProduit(prod);
        setActiveModaleProduit(true);
    };
*/
    return (
        <>
        hello
        </>
    );
};

export default Item;
/*

        <main className="h-100">
            <h2 className="mx-2 fw-lighter"> Produits</h2>

            {Type.map((dataType , key) => (
                <section kay={key}>
                    <span
                        className="<-100 d-flex justify-content-around 
          -4"
                    >
                        <hr className="w-100" />
                        <h3 className={StyleItem.collectionText}>
                            {dataType.toUpperCase()}
                        </h3>
                        <hr className="w-100" />
                    </span>
                    <Bounce left>
                        <ul className={StyleItem.allPosts}>
                            {products
                                .filter((p) => p.type.includes(dataType))
                                .map((product) => (
                                    <li
                                        key={product._id}
                                        onClick={(e) => handleSeeProd(e, product)}
                                    >
                                        <div className={StyleItem.ImgCartDiv} ref={elementDimension} >
                                            <Bounce bottom>
                                                <Image
                                                    loader={myLoader}
                                                    src={product.image[0]}
                                                    alt={product.name}
                                                    width={elementDimension.current ? Math.round(elementDimension.current.clientHeight) : 200}
                                                    height={elementDimension.current ? Math.round(elementDimension.current.clientHeight) : 200}
                                                    layout="intrinsic"
                                                />
                                            </Bounce>
                                        </div>
                                        {product.price[1] && (
                                            <strong className={StyleItem.soldeContent}>
                                                -{product.price[1]}%
                                            </strong>
                                        )}
                                        <div>
                                            <h4 className={StyleItem.titleProduct}>
                                                {product.name}
                                            </h4>
                                            <div align="center" className="my-2 mr-2">
                                                {product.price[1] && (
                                                    <del className="text-danger  mx-2">
                                                        {product.price[0]} {dataWebSite.currency}
                                                    </del>
                                                )}
                                                <span className="fs-5">
                                                    {product.price[1]
                                                        ? Math.round(
                                                            ((100 - product.price[1]) / 100) *
                                                            product.price[0] *
                                                            100
                                                        ) / 100
                                                        : product.price[0]}
                                                    <sup>{dataWebSite.currency} </sup>
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => handelAddCart(e, product)}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Ajouter au panier <i className="bi bi-cart-plus"></i>
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </Bounce>
                </section>
            ))}
        </main>




*/