import DashboardFooter from '@/Compomnents/Footer/DashboardFooter'
import Header from '@/Compomnents/Header/Header'
import ScreeningQuestion from '@/Compomnents/ScreeningQuestion/ScreeningQuestion'
import React from 'react'

const index = () => {
  return (
    <>
    <Header hideNavLinks />
    <ScreeningQuestion/>
    <DashboardFooter style={{pl:"0px"}} waveImage/>
    </>
  )
}

export default index