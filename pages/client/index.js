import Client from "./[section]"
const DefaultClient =({category,products}) => <Client category={category} products={products} />
export default  DefaultClient


 
  
  export async function getStaticProps({ params }) {
     
    const res = await fetch(process.env.URLSERVER + "/api/homepage");
    const HomePage = await res.json();
   
   
    return {
      props: {
        category: HomePage.category,
        products: HomePage.product, 
      },
      revalidate: 60,
    };
  }
  
  