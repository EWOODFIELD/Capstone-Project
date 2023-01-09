import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Template() {
  return (
    <div>
      <h3>Upload Corrections to One of Our Event Records</h3>
        <Outlet />
    </div>
    
  )
}
