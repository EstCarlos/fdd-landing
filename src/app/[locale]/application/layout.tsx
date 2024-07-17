import BackButton from '@/components/BackButton';
import React from 'react'

const layout = ({                                                                                   
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='p-12'>
      <BackButton />
        {children}
    </div>
  )
}

export default layout