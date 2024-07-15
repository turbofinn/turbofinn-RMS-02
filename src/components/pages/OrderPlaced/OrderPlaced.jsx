import React from 'react'
import OrderPlacedMob from './OrderPlacedMob'
import OrderPlacedWeb from './OrderPlacedWeb'
import {useTheme} from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
function OrderPlaced() {
    const theme=useTheme();
    const aspect=useMediaQuery(theme.breakpoints.up('md'))
  return (
    aspect?<OrderPlacedWeb></OrderPlacedWeb>:<OrderPlacedMob></OrderPlacedMob>
  )
}

export default OrderPlaced