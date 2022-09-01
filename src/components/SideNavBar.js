import React from 'react'
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {NavLink} from 'react-router-dom'
function SideNavBar() {
  

  return (
    <div className='text-white py-20 px-10 space-y-4'>
       <NavLink to="/organization" style={({isActive})=>(isActive?{backgroundColor:"#212637e3",transform:"scale(1.05)"}:{})} className='flex w-48 space-x-4 h-10 py-2 pl-3 rounded-lg  hover:bg-[#212637e3]  hover:scale-105 cursor-pointer'>
        <SupervisorAccountSharpIcon style={{color:'white'}} />
        <h1 className='text-lg ' style={{fontFamily:'Josefin Sans'}}>Organization</h1>
       </NavLink>

       <NavLink to="/customer" style={({isActive})=>(isActive?{backgroundColor:"#212637e3",transform:"scale(1.05)"}:{})} className='flex  space-x-4 h-10 py-2 pl-3 rounded-lg  hover:bg-[#212637e3]  hover:scale-105 cursor-pointer'>
        <PermIdentityIcon style={{color:'white'}} />
        <h1 className='text-lg ' style={{fontFamily:'Josefin Sans'}}>Customer</h1>
       </NavLink>

       <NavLink to="/product" style={({isActive})=>(isActive?{backgroundColor:"#212637e3",transform:"scale(1.05)"}:{})} className='flex  space-x-4 h-10 py-2 pl-3 rounded-lg  hover:bg-[#212637e3]  hover:scale-105 cursor-pointer'>
        <ProductionQuantityLimitsIcon style={{color:'white'}} />
        <h1 className='text-lg ' style={{fontFamily:'Josefin Sans'}}>Products</h1>
       </NavLink>

       {/* <div className='flex  space-x-4 h-10 py-2 pl-3 rounded-lg  hover:bg-[#212637e3]  hover:scale-105 cursor-pointer'>
        <SupervisorAccountSharpIcon style={{color:'white'}} />
        <h1 className='text-lg ' style={{fontFamily:'Josefin Sans'}}>Workflow</h1>
       </div> */}

       <NavLink to="/update" style={({isActive})=>(isActive?{backgroundColor:"#212637e3",transform:"scale(1.05)"}:{})} className='flex  space-x-4 h-10 py-2 pl-3 rounded-lg  hover:bg-[#212637e3]  hover:scale-105 cursor-pointer'>
        <NewspaperIcon style={{color:'white'}} />
        <h1 className='text-lg ' style={{fontFamily:'Josefin Sans'}}>Updates</h1>
       </NavLink>
    </div>
  )
}

export default SideNavBar