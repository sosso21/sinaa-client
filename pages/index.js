import Head from 'next/head'
 


export default function  Home({date = "heloo"}){
 
  return (
    <div  >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  >
    <h1>
    hello : {date}
     </h1>

 
    </main>
    </div>
  )
}
 
export async function getStaticProps() {
    
  return {
    props: {
      date : new Date().getTime() ,
    },
    revalidate: 20, // In seconds
  }
}