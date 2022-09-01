import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import People from './People'
function Organization() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("people")
  },[])
  return (
    <div className='text-white'>
    <div className='h-[58px] border-b-[1px] border-b-[#ffffff17] flex fixed z-10 bg-[#212637e9] w-[77.9%]'>
    <h1 className='text-white text-2xl font-bold text-left ml-4 mt-3' style={{fontFamily:'Josefin Sans'}}>Organization</h1>
    <div className='flex justify-center space-x-24 ml-44'>
    <NavLink to="people" style={({isActive})=>(isActive?{borderBottom:"1px solid white",fontFamily:'Josefin Sans'}:{fontFamily:'Josefin Sans'})} className='text-xl h-[58px] pt-4 hover:border-b-[1px] hover:border-b-white' >People</NavLink>
    <NavLink to="team" style={({isActive})=>(isActive?{borderBottom:"1px solid white",fontFamily:'Josefin Sans'}:{fontFamily:'Josefin Sans'})} className='text-xl h-[58px] pt-4 hover:border-b-[1px] hover:border-b-white'>Team</NavLink>
    <NavLink to="project" style={({isActive})=>(isActive?{borderBottom:"1px solid white",fontFamily:'Josefin Sans'}:{fontFamily:'Josefin Sans'})} className='text-xl h-[58px] pt-4 hover:border-b-[1px] hover:border-b-white' >Project</NavLink>
    </div>
    </div>
    {/* <People/> */}
    <Outlet/>
    </div>
  )
}

export default Organization