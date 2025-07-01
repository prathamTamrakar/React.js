import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/prathamTamrakar')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // })


  return (
    
    <div className='text-white text-center bg-gray-600 p-4 text-3xl '>Github Followers : {data.followers}
        <img src={data.avatar_url} alt="" />
    </div>
  )
}



const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/prathamTamrakar')
    return res.json()
}


export {
    Github,
    githubInfoLoader
}