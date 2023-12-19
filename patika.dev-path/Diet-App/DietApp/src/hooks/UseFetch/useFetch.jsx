import { useEffect,useState } from "react";


 const useFetch = (url) => {
  const [loading,setLoading] = useState(true);
  const [err,setErr] = useState(null);
  const [data,setData] = useState([]);

  async function fetchData(){
    try {
    const currentData = await fetch(url).then(res => res.json());
    await setData(currentData);
    await setLoading(false);
    } catch (error) {
      setErr(error);
    }
  }
  useEffect(() =>{
     fetchData(); 
  },[])

  return {err,loading,data}
}

export default useFetch;