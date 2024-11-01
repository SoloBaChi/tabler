import React, { useEffect, useState } from 'react'
import NotificationIcon from '../icons/NotificationIcon'
import MenuBarIcon from '../icons/MenuBarIcon';
import CloseIcon from '../icons/CloseIcon';

const NavBar = () => {
    const[userName,setUserName] = useState("");

    useEffect(()=>{
        const fetchUserName = () => {
         const username = localStorage.getItem("admin_name");
         setUserName(username)
        }
        fetchUserName()
    },[])

    const [toggleMenu,setToggleMenu] = useState(false);
    const handleToggleMenu = () => {
        setToggleMenu(prev => !prev)
    }
    
  return (
    <>
    <section className="navbar-container">
        <div className="flex lg:flex-row items-center lg:items-end justify-between relative">
            <div className="flex-item">
                <div className="flex items-center gap-x-2">
                    <div className="logo-container w-[24px] h-[24px]">
                        <img src={`/assets/tabler-logo.png`} alt="" />
                    </div>
                    <h2 className='logo-text font-[500] text-[1rem] lg:text-[1.6rem] text-gray-600'>tabler</h2>
                </div>
            </div>

            <div className="flex-item md:hidden" >
                <span
                onClick={handleToggleMenu} 
                className='inline-block align-middle border rounded-[4px] cursor-pointer relative z-20'>
                 <MenuBarIcon/>
                </span>
            </div>

            <div 
              onClick={handleToggleMenu}
              className={`${toggleMenu ? "block" : "hidden"} 
              flex-item md:block top-0 right-0 fixed md:static w-full md:w-auto bg-white z-30 h-screen md:h-auto `
              }
              >
                <div className="flex relative py-16 px-2 md:p-0 justify-end md:justify-star gap-x-8 items-center">
                    <span 
                    onClick={handleToggleMenu}
                    className='close-icon inline-block align-middle md:hidden absolute top-4 left-4 cursor-pointer border border-gray-700 rounded-[50%]'>
                        <CloseIcon/>
                    </span>
                    <div className="flex-item">
                        <button className='inline-block border border-blue-500 p-2 rounded-[4px] text-blue-500'>Source code</button>
                    </div>
                    <div className="flex-item relative">
                        <NotificationIcon/>
                        <span className='absolute inline-block h-[12px] w-[12px] bg-[var(--red-color)] rounded-[50%] top-[-8px] right-[-6px]'></span>
                    </div>
                    <div className="flex-item flex gap-x-2">
                        <div className="inline-block h-[45px] w-[45px] rounded-[50%] overflow-hidden">
                            <img src={`/assets/user-profile.png`} alt="profile" />
                        </div>
                        <div className="details">
                            <h4 className='text-[1rem] font-bold text-gray-500 capitalize'>{userName}</h4>
                            <p className='text-gray-300'>Administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr/>
    {/* <SubNavLinks/> */}
   </>
  )
}

export default NavBar