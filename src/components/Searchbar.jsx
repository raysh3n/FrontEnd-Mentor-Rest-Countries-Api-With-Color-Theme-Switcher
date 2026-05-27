export default function Searchbar({search, setSearch,setSelected,selected}) {

function handleInput(e) {
  setSearch(e.target.value);
  setSelected('All');
}
  
  return (
    <div className="relative lg:w-[40%]" >
      <ion-icon name="search-outline" className="absolute text-lg left-5 top-1/2 -translate-y-1/2 [--ionicon-stroke-width:50px] text-gray-400 dark:text-white"></ion-icon>
      <input onChange={handleInput} value={search } className="pl-16 py-4 w-full rounded-lg placeholder:text-gray-300 shadow-[rgba(0,0,0,0.16)_0px_1px_4px] focus:outline-none bg-white dark:bg-[hsl(209,23%,22%)] dark:text-white dark:placeholder:text-gray-400"  placeholder="Search for any country..."></input>  {/*border border-purple-700  */}
    </div>
    
    // <div className="container mx-auto px-4 py-4 mt-6 border">
      // <div className="relative">
      //   <ion-icon name="search-outline" className="text-gray-400 absolute left-6 top-1/2 -translate-y-1/2 text-[1.4rem]"></ion-icon>
      //  <input className="pl-16 py-4 border rounded-lg focus:border-gray-300 outline-none w-full placeholder:font-semibold" type="search" placeholder="Search for a country..."></input> 
      // </div>
    // </div> 
 ) 
}

// Clean version — delete the code above once you've reviewed it:
//
// export default function Searchbar() {
//   return (
//     // <div className="container mx-auto px-4 py-4 mt-6">
//       <div className="relative">
//         <ion-icon
//           name="search-outline"
//           className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
//         ></ion-icon>
//         <input
//           type="search"
//           placeholder="Search for a country..."
//           className="w-full pl-14 pr-6 py-4 rounded-lg shadow-md border border-transparent focus:border-gray-300 outline-none bg-white dark:bg-gray-800 dark:text-white"
//         />
//       </div>
//     // </div>
//   )
// }