import React, { ReactNode } from 'react'

const Divider = ({children}: {children:ReactNode}) => {
  return (
    <span className="flex items-center">
  <span className="h-px flex-1 bg-black"></span>
  <span className="shrink-0 px-6 text-sm font-bold tracking-wider text-indigo-600 uppercase">{children}</span>
  <span className="h-px flex-1 bg-black"></span>
</span>
  )
}

export default Divider