import { Link } from "react-router-dom" 
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"

export default function Card({country}) {

  const test = useContext(ThemeContext);

  console.log(`test is ${test}`)

  
  return (
    <Link to={`/${country.cca3}`}>
      <div className="bg-white rounded shadow-lg overflow-hidden dark:bg-[hsl(209,23%,22%)] dark:text-white">
        
        <img src={country.flags.svg } onError={e=>e.target.src='/file-not-found.webp'} className="h-40 w-full" />  {/*object-cover decided to remove it so that 404 icon can look nice  */}
  
        <div className="px-5">
  
          <div className="font-extrabold py-5" >{country.name.common} </div> 
            
            <div className="pb-5">   
            <p><span className="font-semibold">Population:</span>&nbsp;<span className="font-light">{country.population.toLocaleString()}</span></p>
            <p><span className="font-semibold">Region:</span>&nbsp;<span className="font-light">{country.region}</span></p>
            <p><span className="font-semibold">Capital:</span>&nbsp;<span className="font-light">{country.capital?.[0]??'N/A'}</span></p>
            </div> 
            
        </div> 
          
      </div>  
    </Link>
 ) 
}