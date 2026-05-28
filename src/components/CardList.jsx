import { useState,useEffect } from "react";
import Card from "./Card"

export default function CardList({selected,setSelected, search, setSearch}) {
  const [countries, setCountries] = useState([]); 
  const [loadState, setLoadState] = useState("loading");
  // const regionurl = `https://restcountries.com/v3.1/region/${selected}`;
  const url = 'https://restcountries.com/v3.1/all?fields=name,region,capital,flags,population,cca3';

  useEffect(
    () => {
      fetch(url).then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        // throw new Error(res.status)
        return res.json()
      }
      )
        .then(
        data => {setCountries(data); 
          setLoadState("done");   //can do both here because React batches both set calls since they are in the same then callback. will be applied in the single re-render
      }
      ).catch(err=>setLoadState("error"));
    },[]
  );



  
 //in the filter func, impl the search filter here
// const visible =( selected=== 'Filter by Region' || selected==='All')? countries : countries.filter(c=>c.region===selected)
  const visible = countries.filter(
    (c) => {
      if (search.trim()) {
        return c.name.common.toLowerCase().includes(search.trim().toLowerCase());
     }

      if (selected !== 'Filter by Region' && selected !== 'All') {
      return c.region===selected
      } 
      return true; //needed if you dont type, and you dont use the dropdown. A fallback.
   }
  )



  function renderCards() {
  if( loadState==="error")  return   <div className="py-6">Failed to load</div>
  if(loadState === "done") return  visible.map((country) => {
  return  <Card key={country.name.common} country={country} />
})
  return <div className="dark:text-white">Loading... Please Wait.</div> 
}
  
  return (
    <div className="container mx-auto py-6 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-16 transition-colors duration-300" > {/* border here*/}

      { renderCards()  }

    </div>
 )
}
