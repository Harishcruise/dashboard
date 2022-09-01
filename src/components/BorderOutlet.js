import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import SideNavBar from './SideNavBar';
function BorderOutlet(props) {
  return (
    <div className="rounded-3xl h-[650px] w-[1350px] backdrop-blur-md bg-[#21263770]">
    {/* Header */}
    <div className='flex h-[58px] border-b-[1px] border-b-[#ffffff17] py-2 px-3'>
        <h1 className='text-white text-center text-2xl font-bold ml-[70px] mt-2' style={{fontFamily:'Josefin Sans'}}>Dashboard</h1>
        <div className='border-3 rounded-md bg-[#212637e3] border-black w-[600px] ml-48 flex px-4'> <SearchSharpIcon style={{color:'#9BA2AE'}} className="mt-2"/>  <input placeholder='Search...' className='outline-none h-[100%] w-[100%] bg-[#212637e3] ml-2 text-white'/> </div>
        <div className='ml-44 flex space-x-5 mt-1'>
        <NotificationsIcon style={{color:'white',width:'30px',height:'30px'}}/>
        <AccountCircleSharpIcon style={{color:'white',width:'30px',height:'30px'}} />
        <SettingsSharpIcon style={{color:'white',width:'30px',height:'30px'}} />
        </div>       
    </div>
    {/* Header-end */}
    {/* body */}
    <div className='flex w-[100%] h-[592px]'>
        <div id="navbar" className='flex-[0.2] border-r-[1px] border-r-[#ffffff17] flex pl-6 items-center' >
          <SideNavBar/>
        </div>
        <div id="content" className='flex-[0.8]  overflow-y-auto section' >
           {props.children}
        </div>
    </div>
    </div>
  )
}

export default BorderOutlet