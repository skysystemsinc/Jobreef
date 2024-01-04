import DashboardFooter from '@/Components/Footer/DashboardFooter'
import Header from '@/Components/Header/Header'
import ScreeningQuestion from '@/Components/ScreeningQuestion/ScreeningQuestion'
import React from 'react'

const index = () => {
  return (
    <>
    <Header hideNavLinks  candidate/>
    <ScreeningQuestion/>
    <DashboardFooter style={{pl:"0px"}} waveImage/>
    </>
  )
}

export default index