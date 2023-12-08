import {React, useEffect, useState} from "react"
import Cards from "./Components/Cards"
import Filter from "./Components/Filter"
import Navbar from "./Components/Navbar"
import Spinner from "./Components/Spinner"
import {filterData,apiUrl} from "./data"
import {toast} from "react-toastify"

const App = () => {
  const [courses,setCourses]=useState(null)
  const [loading ,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  
  const fetchData=async()=>{
    try{
      setLoading(true);
      const res=await fetch(apiUrl);
      const op=await res.json();
      setCourses(op.data);
    }
    catch(err)
    {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  }

  useEffect(()=>{fetchData();},[])

  return (
    <div className="bg-bgDark2 min-h-screen flex flex-col">
      <div>
        <Navbar/>
      </div>
      
      <div>
        <Filter data={filterData} category={category} setCategory={setCategory}/>
      </div>
       
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? (<Spinner/>): (<Cards courses={courses} category={category}></Cards>)}
      </div>
    
    </div>
)};

export default App;
