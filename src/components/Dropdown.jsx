  import { useState,useRef,useEffect } from "react"
  
export default function Dropdown({selected,setSelected, search, setSearch}) {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
    

  
  const regions = ["All","Africa", "Americas", "Asia", "Europe", "Oceania"]

  function handleDropdown() {
    setOpen(!open);
  }
    
  function updateSelection(el) {
    setSelected(el);
    setOpen(false);
    setSearch('');
  }


  useEffect(() => {
    if (open === false) return;
    
      function handleClick(e) {
        if (!dropdownRef.current.contains(e.target)){ //this is needed, or else, dropdown will close but value will not get updated. meaning if what you click(e.target) is not equal to the dropdownRef.current(the dropdown), then close it //dropdownRef.current
          setOpen(false);  
        }
      } 
  
      document.addEventListener("mousedown", handleClick)
    
  return ()=>{ document.removeEventListener("mousedown", handleClick) } //cleanup//notice i dont even need to return

    
  },[open]
  );
    
  return (
    <div ref={dropdownRef} className="mt-6 lg:mt-0 relative w-1/2 lg:w-[20%]">
        
          <button className="w-full text-left flex justify-between place-items-center py-4 px-4 rounded-lg shadow-[rgba(0,0,0,0.16)_0px_1px_4px] bg-white dark:bg-[hsl(209,23%,22%)] dark:text-white" onClick={handleDropdown}>
            <span>
               {selected}
            </span>
            <ion-icon name="chevron-down-outline"></ion-icon>
           </button> 

        
        <div className={`absolute z-10 mt-3 bg-neutral-50 dark:bg-[hsl(209,23%,22%)] overflow-hidden rounded-lg shadow-[rgba(0,0,0,0.16)_0px_1px_4px] w-full ${open ? '' : 'hidden'}`}>
          {
            regions.map((el) => 
              <button key={el} onClick={()=>{updateSelection(el)}} className="py-2 px-4 w-full text-left hover:bg-neutral-200 dark:hover:bg-[hsl(207,26%,17%)] dark:text-white">{ el}</button>
            )  
          }
        </div>

        
        
      </div>



      
    )
   } 

   
    // const [open, setOpen] = useState(false)
    // const [selected, setSelected] = useState("")
    // return (
    //   <div className="relative w-52">
    //     <button
    //       onClick={() => setOpen(!open)}
    //       className="w-full flex items-center justify-between px-5 py-4 rounded-md shadow-md bg-white dark:bg-gray-800 text-left"
    //     >
    //       <span className={selected ? "" : "text-gray-400"}>
    //         {selected || "Filter by Region"}
    //       </span>
    //       <svg> {/* chevron down icon */} </svg>
    //     </button>
        
    //     {open && (
    //       <div className="absolute top-full mt-1 w-full rounded-md shadow-md bg-white dark:bg-gray-800 overflow-hidden z-10">
    //         {regions.map((region) => (
    //           <button
    //             key={region}
    //             onClick={() => {
    //               setSelected(region)
    //               setOpen(false)
    //             }}
    //             className="w-full px-5 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //           >
    //             {region}
    //           </button>
    //         ))}
    //       </div>
    //     )}
    //   </div>