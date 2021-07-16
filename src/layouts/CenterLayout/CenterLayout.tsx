import React from 'react'
import { classnames } from 'tailwindcss-classnames'

export const CenterLayout = ({ children }) => {
  return (
    <div
      className={classnames(
        'mx-4',
        'md:m-auto',
        'md:max-w-3xl',
        'lg:max-w-7xl'
      )}>
      {children}
    </div>
  )
}

export default CenterLayout
