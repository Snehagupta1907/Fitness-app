import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const ExcerciseCard = ({excercise}) => {
  return (
    <Link className='excercise-card' to={`/exercise/${excercise.id}`} style={{borderTop:"4px solid #653b46",textDecoration:'none'}}>
        <img src={excercise.gifUrl} alt={excercise.name} Loading='lazy'/>
        <Stack direction='row'>
            <Button sx={{marginLeft:'20px',color:'#fff',background:"#ffa9a9",fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                {excercise.bodyPart}
            </Button>
            <Button sx={{marginLeft:'20px',color:'#fff',background:"#fcc757",fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                {excercise.target}
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='20px'>
            {excercise.name}
        </Typography>
    
    </Link>
  )
}

export default ExcerciseCard