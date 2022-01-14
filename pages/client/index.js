import Client from "./[section]"
const DefaultClient =({category,products}) => <Client category={category} products={products} />
export default  DefaultClient


 
export async function getStaticProps({ params }) {
  
  
  //let   body={token:localStorage.getItem("token")}
 
  const res = await fetch(process.env.URLSERVER + "/api/category/find" );
  const category = await res.json();
 
  return {
    props: {
      category:category,
    },
    revalidate: 60,
  };
}
