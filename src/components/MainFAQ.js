import { Box, Button } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, {useState} from 'react'
import CenterHeaderComponent from './CenterHeaderComponent'

const moreInfoBtn = {
  backgroundColor: 'primary.main', 
  color: '#fff', 
  py: 1.5, 
  px: 2.5,
  mt: 5
}

const accordionsContainerStyle = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  mt: 5
}

export default function MainFAQ() {
  const [activeAccordion, setActiveAccordion] = useState([]);

  const centerHeader = "Frequently Asked Questions"
  const centerText = "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."

  function onChangeHandler(event, expanded, number){
    let activeAccordionCopy = [...activeAccordion];
    activeAccordionCopy[number] = expanded;
    setActiveAccordion(activeAccordionCopy);
  } 

  function renderAccordion(summary, number){
    const activeState = activeAccordion[number]
    return(
      <Box>
        <hr style={{display: summary !== 'What is Bookmark?' && 'none'}} className='accordion-hr'/>
        <Accordion elevation={0} sx={{maxWidth: '500px', pr: 1}}
        onChange={(event, bool)=> onChangeHandler(event, bool, number)}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: activeState && 'warning.main'}} fontSize='large'/>}
        aria-controls="panel1a-content"
        id="panel1a-header">
          <Typography>{summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nihil dolores, libero accusamus voluptatibus neque nemo eveniet soluta magni accusantium, assumenda est tenetur quisquam perspiciatis repudiandae veritatis hic incidunt cumque!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr className='accordion-hr'/>
      </Box>
    )
  }

  function renderAccordions(){
    return(
      <Box sx={accordionsContainerStyle}>
        {renderAccordion('What is Bookmark?', 0)}
        {renderAccordion('How can I request a new browser?', 1)}
        {renderAccordion('Is there a mobile app?', 2)}
        {renderAccordion('What about other Chromium browsers?', 3)}
        <Button variant='contained' sx={moreInfoBtn}>More Info</Button>
      </Box>
    )
  }

  return (
    <Box sx={{mt: 15}}>
      <CenterHeaderComponent header={centerHeader} text={centerText}/>
      {renderAccordions()}
    </Box>
  )
}
