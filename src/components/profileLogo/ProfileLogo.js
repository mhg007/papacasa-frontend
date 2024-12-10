import React from 'react'
import proLogo from "./Asssts/user-profile-icon-circle-button-260nw-2417410915.jpg"

function ProfileLogo() {
  return (
    <>
      <div className='bg-slate-400 rounded-full w-12'>
        <img className='rounded-full' src={proLogo}  alt="profile pictures" />
      </div>
    </>
  )
}

export default ProfileLogo
