import { Link } from "react-router-dom" 
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"

export default function Card({country}) {

  const test = useContext(ThemeContext);

  console.log(`test is ${test}`)

  
  return (
    <Link to={`/${country.cca3}`} className="flex flex-col">  {/*need to have flex-1 refer below diagram*/}
      <div className="bg-white rounded shadow-lg overflow-hidden dark:bg-[hsl(209,23%,22%)] dark:text-white flex flex-col flex-1"> {/*need to have flex-1 refer below diagram*/}
        
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


{/*
  Without the fix — the problem
  Step 1: CSS Grid says every grid item (<Link>) stretches to fill its cell. All <Link>s are the same height ✅
  ┌──────────────────────┐
  │  <Link>              │  ← Full height of grid cell (matches all other Links)
  │                      │
  │  ┌────────────────┐  │
  │  │ <div class="    │  │
  │  │  bg-white...">  │  │  ← This div is a plain block child. It only grows
  │  │                  │  │     as tall as its content demands.
  │  │  ┌──────────┐   │  │
  │  │  │ image    │   │  │
  │  │  │ (h-52)   │   │  │
  │  │  └──────────┘   │  │
  │  │  ┌──────────┐   │  │
  │  │  │ content  │   │  │
  │  │  │          │   │  │
  │  │  └──────────┘   │  │
  │  └────────────────┘  │
  │                      │  ← Empty space! The div doesn't fill the Link
  └──────────────────────┘
  Key point: A block child (<div>) inside a block parent (<Link>) only takes the height of its content. It doesn't stretch to fill the parent's height. So the card div stays short, and different content lengths produce different heights. The grid cell is the same size for all, but the visible card isn't.
  With the fix
  Step 1: <Link> becomes flex flex-col
  This makes <Link> a flex container with a vertical column direction. Now the <div> inside is a flex item, not a plain block.
  Step 2: Flex items can stretch along the cross axis (width here), but along the main axis (height in a column), they default to content height. So we need flex-1 on the <div>.
  flex-1 means: flex-grow: 1 — grow to fill any remaining space in the parent.
  ┌──────────────────────┐
  │  <Link class="       │  ← flex container (column)
  │   flex flex-col">    │     Full height of grid cell
  │                      │
  │  ┌────────────────┐  │
  │  │ <div class="   │  │  ← flex item with flex-1
  │  │  flex-1 ...">  │  │     Grows to fill ALL remaining height in Link
  │  │                  │  │
  │  │  ┌──────────┐   │  │
  │  │  │ image    │   │  │
  │  │  │ (h-52)   │   │  │
  │  │  └──────────┘   │  │
  │  │  ┌──────────┐   │  │
  │  │  │ content  │   │  │
  │  │  │ (flex-1) │   │  │
  │  │  └──────────┘   │  │
  │  └────────────────┘  │
  │                      │  ← No empty space! flex-1 filled it
  └──────────────────────┘
  Step 3: Since flex-1 makes the card div fill the entire <Link>, and every <Link> is forced by CSS Grid to be the same height, every card div is now the same height too.
  The chain of "same height":
  1. CSS Grid → all grid cells are the same height
  2. Grid cell forces <Link> to that height
  3. <Link> as flex flex-col + <div> as flex-1 → the card <div> stretches to match <Link>'s height
  4. Result: all visible cards are the same height
  Without step 3, the card div just sits at content height inside the tall <Link>, leaving a gap and unequal appearance.
  */
}