import React from 'react'
import SubNavLinks from './SubNavLinks'
import NotificationIcon from '../icons/NotificationIcon'

const NavBar = () => {
  return (
    <>
    <section className="navbar-container">
        <div className="flex lg:flex-row lg:items-end  lg:justify-between">
            <div className="flex-item">
                <div className="flex items-center gap-x-2">
                    <div className="logo-container w-[24px] h-[24px]">
                        <img src={`/assets/tabler-logo.png`} alt="" />
                    </div>
                    <h2 className='logo-text font-[500] text-[1rem] lg:text-[1.6rem] text-gray-600'>tabler</h2>
                </div>
            </div>
            <div className="flex-item">
                <div className="flex gap-x-8 items-center">
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
                            <h4 className='text-[1rem] font-bold text-gray-500'>Jane Pearson</h4>
                            <p className='text-gray-300'>Administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr/>
    <SubNavLinks/>
   </>
  )
}

export default NavBar