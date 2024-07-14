import React from 'react'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import OrderHistoryWeb from './OrderHistoryWeb'
import OrderHistoryMob from './OrderHistoryMob'

function OrderHistory() {
    const theme =useTheme();
    const aspect=useMediaQuery(theme.breakpoints.up('md'))
  return (
    aspect?<OrderHistoryWeb></OrderHistoryWeb>:<OrderHistoryMob></OrderHistoryMob>
  )
}

export default OrderHistory