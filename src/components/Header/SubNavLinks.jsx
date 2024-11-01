import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TabSelector from '../TabSelector/TabSelector'

const SubNavLinks = () => {
    const subLinks  = [
        {
         id:"home",
         title:"Home",
         icon:""
        },
        {
         id:"interface",
         title:"Interface",
         icon:""
        },
        {
         id:"components",
         title:"Components",
         icon:""
        },
        {
         id:"pages",
         title:"Pages",
         icon:""
        },
        {
         id:"form",
         title:"Form",
         icon:""
        },
        {
         id:"gallery",
         title:"Gallery",
         icon:""
        },
        {
         id:"documentation",
         title:"Documentation",
         icon:""
        },

    ]
    const [activeTab,setActiveTab] = useState("Home");

    const handleClick  = (tab) => {
        setActiveTab(tab)
    }
  return (
     <section className='nav-links'>
     <div className="bg-white">
        <nav>
            <ul>
             <TabSelector
             tabs = {subLinks}
             activeTab={activeTab}
             handleClick={handleClick}
             />
            </ul>
        </nav>
      </div>
     </section>
  )
}

export default SubNavLinks