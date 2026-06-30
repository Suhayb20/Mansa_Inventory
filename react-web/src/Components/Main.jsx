import React from 'react'
import Button from './Button.jsx'
function Main() {
  return (
    <>

      <div className='container'>
        
      <div className='p-5 text-center bg-light-dark rounded-3'>
        <h1 className='text-light'> Welcome to your home dashboard </h1>
        <p className='text-light lead'> This is an front page of your inventory app management dashboard.
          In this dashboard, you can manage your inventory and track your sales.</p>
          <Button text='Login' class='btn-outline-info' url="/login" />
      </div>

      </div>

    </>
  )
}

export default Main