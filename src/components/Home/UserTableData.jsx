import React from 'react'

const UserTableData = () => {
  return (
    <div className='table-container'>
        <table className='w-full'>
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
                        <span className="icon-container">
                        <img src={`/assets/user-profile.png`} alt="user" />
                        </span>
                        <span>Ronald Bradley</span>
                        </div>
                    </td>
                    <td>Initial commit</td>
                    <td>May 16, 2018</td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">
                        <span className="icon-container">
                        {/* <img src={`/assets/user-profile.png`} alt="user" /> */}
                        BM
                        </span>
                        <span>Rusell Gibson</span>
                        </div>
                    </td>
                    <td>Main structure</td>
                    <td>May 22, 2018</td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">
                        <span className="icon-container">
                        <img src={`/assets/user-profile.png`} alt="user" />
                        </span>
                        <span>Bervely Armstrong</span>
                        </div>
                    </td>
                    <td>Left side Adjustment</td>
                    <td>April 15, 2018</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UserTableData