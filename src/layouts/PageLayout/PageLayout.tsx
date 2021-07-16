import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

export const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default PageLayout
