import { useState } from "react";

// https://api.unsplash.com/search/photos?page=1&query=${serachValue}&client_id=${Api_KEY}


const App = () => {
  const [search, setsearch] = useState()
  const [data, setdata] = useState([])

  let Api_KEY = "MNvdp2ipMNKm4cFKkKXsTFOEXn_c5QYmG1koAiBRZC0"

  const handlesearch = (event)=>{
    setsearch(event.target.value)
  }
  
  const getdata = ()=>{
    myfun(search)
  }


  const myfun = async(searchval)=>{
    const get = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchval}&client_id=${Api_KEY}`)
    const jsondata =await get.json()
    
    setdata(jsondata.results)
    
  }


  


 

  return (
    <div className="min-h-screen w-full bg-gray-300">
      <div className="p-6  text-center   ">
      <h1 className="text-2xl font-bold mb-4">Search Images</h1>
      <div className="flex mx-auto max-w-[75vw] gap-2  mb-6">
        <input type="text" placeholder="Search for images..." onChange={handlesearch}  className="flex-1 bg-white p-2 "/>
        <button className="bg-green-400 px-3 py-1 hover:bg-green-800 rounded hover:text-white"  onClick={getdata} >Search</button>
      </div>

      <div className="flex flex-wrap gap-10 w-full  justify-center">
        {data.map((item,index)=>{
          return <img className="w-[400px] h-[400px] rounded-xl shadow-lg shadow-black hover:scale-101" key={index} src={item.urls.full} alt="" />
        })}

</div>

      </div>
    </div>
  );
}

export default App


