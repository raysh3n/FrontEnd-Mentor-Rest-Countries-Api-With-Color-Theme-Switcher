import { Link } from "react-router-dom" 
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"

export default function Card({country}) {

  const test = useContext(ThemeContext);

  console.log(`test is ${test}`)

  
  return (
    <Link to={`/${country.cca3}`}>
      <div className="bg-white rounded shadow-lg overflow-hidden dark:bg-[hsl(209,23%,22%)] dark:text-white flex flex-col ">
        
        <div className="h-52 flex justify-center items-center overflow-hidden">
          <img src={country.flags.svg } onError={e=>e.target.src='/file-not-found.webp'} className="max-w-[130rem] sm:max-w-full h-full object-fill" />  {/*object-cover decided to remove it so that 404 icon can look nice  */}
        </div>
  
        <div className="px-5 flex-1 flex flex-col justify-between">
  
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