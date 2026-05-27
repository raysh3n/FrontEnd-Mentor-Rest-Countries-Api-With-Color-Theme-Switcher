import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";
import Test from "./Test";
import Test2 from "./Test2";

export default function Filters({ selected, setSelected,search, setSearch }) {
  return (
<div className="container mx-auto py-6 px-4 mt-4 flex flex-col lg:flex-row lg:justify-between"> {/* border border-green-400 */}
     <Searchbar search={search} setSearch={setSearch} selected={selected} setSelected={setSelected}></Searchbar> 
     <Dropdown selected={selected} setSelected={setSelected} search={search} setSearch={setSearch}></Dropdown>
     {/* <Test></Test>
     <Test2></Test2>*/}
    </div> 
  )
}