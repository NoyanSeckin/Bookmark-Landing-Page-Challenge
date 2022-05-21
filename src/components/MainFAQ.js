import { Box } from '@mui/material'
import React from 'react'
import CenterHeaderComponent from './CenterHeaderComponent'
export default function MainFAQ() {
  const centerHeader = "Frequently Asked Questions"
  const centerText = "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
  return (
    <Box sx={{mt: 15}}>
      <CenterHeaderComponent header={centerHeader} text={centerText}/>
    </Box>
  )
}
