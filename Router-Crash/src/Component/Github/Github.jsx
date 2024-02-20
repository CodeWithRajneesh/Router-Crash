import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
//     const[data,setData]= useState([])

//     useEffect(() => {
//     fetch('https://api.github.com/users/CodeWithRajneesh')
//     .then(res=>res.json())
//     .then(data =>{
//         console.log(data)
//          setData(data)
//     })
// },[])
  return (
    <div className='text-start font-bold  justify-between flex gap-10 text-2xl mb-4 bg-gray-600 shadow-2xl text-white p-4 '>
      <div className="  flex flex-col gap-2">
       <h1>Github Followers: {data.following}</h1>
        <h1>User Name: {data.name}</h1>
        <h1>Repositeries: {data.public_repos}</h1>
      </div>
      <div className=" flex " >
      <img  className='rounded-3xl'src={data.avatar_url} alt="Git Picture" width={150} />
      </div>
      
    </div>
    
  )
}

export default Github


export const githubInfoLoader = async() =>{
  const response  = await fetch('https://api.github.com/users/CodeWithRajneesh')
  return response.json()
}
