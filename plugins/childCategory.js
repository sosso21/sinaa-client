
  export const ChildForNavBar =({all, _actual ="" , _formular ="" }) => {
    const  actual = [...all].filter(i=> i.slug == _actual)[0]
 const result =  [...all].filter(i=> [...([...actual.children || []].map(ii=> ii.id))].includes(i.id) && i.parent_category_list.length === actual.parent_category_list.length +1 )
  return  !!_formular ? [...result].filter(i=> i.format_profuct == _formular) : result
 
  }


  export const childrenCategory = (
    actual_category = null,
    all = [],
    _formular = "Divers",
    data,
    work_proposal ) => {
  
    const banned_w_p = !!data.work_proposal
      ? work_proposal.filter((e) => e != data.work_proposal)[0]
      : "";

    if (actual_category == null) {
      return [...all]
        .filter(
          (i) =>
            ![...i.parent_category_list].length && i.format_profuct == _formular
        )
        .filter((e) => e.work_proposal != banned_w_p);
    }


    const children = ChildForNavBar({all:all, _actual :actual_category.slug , _formular :"" }) 

     
    return [...children].filter((e) => e.work_proposal != banned_w_p);
  };
  

  export const giveMeProducttChild =(all,_actual )=>{
    
    const  actual = [...all].filter(i=> i.slug == _actual)[0]
    const idChildren = [...actual.children].map(ii=>ii.id) 
    const child = [...all].filter(i=>[...idChildren].includes(i.id))
     let product = actual.products || [] ;

     for (let index = 0; index < child.length; index++) {
       const element = child[index];
       if (product.length <= 10) {
         product = [...product,...element.products];
       }
     } 
 
     return [...product].sort((a,b)=>b.id-a.id)
  }

