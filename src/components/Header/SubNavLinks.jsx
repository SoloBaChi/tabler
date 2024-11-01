import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TabSelector from '../TabSelector/TabSelector'
import HomeIcon from '../icons/HomeIcon'
import InterfaceIcon from '../icons/InterfaceIcon'
import ComponentsIcon from '../icons/ComponentsIcon'
import PageIcon from '../icons/PageIcon'
import FormIcon from '../icons/FormIcon'
import GalleryIcon from '../icons/GalleryIcon'
import DocumentationIcon from '../icons/DocumentationIcon'

const SubNavLinks = () => {
    const subLinks  = [
        {
         id:"home",
         title:"Home",
         icon:<HomeIcon/>
        },
        {
         id:"interface",
         title:"Interface",
         icon:<InterfaceIcon/>
        },
        {
         id:"components",
         title:"Components",
         icon:<ComponentsIcon/>
        },
        {
         id:"pages",
         title:"Pages",
         icon:<PageIcon/>
        },
        {
         id:"form",
         title:"Form",
         icon:<FormIcon/>
        },
        {
         id:"gallery",
         title:"Gallery",
         icon:<GalleryIcon/>
        },
        {
         id:"documentation",
         title:"Documentation",
         icon:<DocumentationIcon/>
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