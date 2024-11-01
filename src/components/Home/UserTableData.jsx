import React, { useEffect, useState } from 'react'
import DeleteIcon from '../icons/deleteIcon';

const UserTableData = () => {
 const[userName,setUserName] = useState("");

    useEffect(()=>{
        const fetchUserName = () => {
         const username = localStorage.getItem("admin_name");
         setUserName(username)
        }
        fetchUserName()
    },[])
  return (
    <div className='table-container'>
        <table className='w-[100%]'>
            <thead>
                <tr>
                    <th className='font-[500] p-4 text-left'>USER</th>
                    <th className='font-[500] p-4 text-left'>COMMIT</th>
                    <th className='font-[500] p-4 text-left'>DATE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">
                        <span className="icon-container overflow-hidden">
                        <img src={`/assets/user-profile.png`} alt="user" />
                        </span>
                        <span className='capitalize'>{userName}</span>
                        </div>
                    </td>
                    <td>Initial commit</td>
                    <td>May 16, 2018</td>
                    <td><DeleteIcon/></td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">
                        <span className="icon-container overflow-hidden">
                        BM
                        </span>
                        <span>Rusell Gibson</span>
                        </div>
                    </td>
                    <td>Main structure</td>
                    <td>May 22, 2018</td>
                    <td><DeleteIcon/></td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">
                        <span className="icon-container overflow-hidden">
                        <img src={`/assets/profile-image.jpg`} alt="user" />
                        </span>
                        <span>Solomon Joboson</span>
                        </div>
                    </td>
                    <td>Left side Adjustment</td>
                    <td>April 15, 2018</td>
                    <td><DeleteIcon/></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UserTableData