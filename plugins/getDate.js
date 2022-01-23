
  const getDate = (time) => {
    const d = new Date(time);
    return +d.getFullYear() + "/" + (+d.getMonth() + 1) + "/" + d.getDate();
  };
  
  export default getDate