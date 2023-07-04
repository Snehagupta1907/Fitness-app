import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import ExcerciseCard from './ExcerciseCard'


const Excercise = ({excercises,setExcercises,bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const excercisesPerPage=9;

  const paginate=(e,value)=>{
    setCurrentPage(value);

    window.scrollTo({ top: 1450, behavior: 'smooth' })
  }

  
const startIndex = (currentPage - 1) * excercisesPerPage;
const endIndex = startIndex + excercisesPerPage;
const displayedExcercises = excercises.slice(startIndex, endIndex);

  console.log(excercises)
  return (
    <Box id='excercises' sx={{marginTop:{lg:'110px'}}} mt='50px' p='20px'>
      <Typography variant='h4' mb='46px' >
        Showing Results
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{gap:{lg:'110px',xs:'50px'}}}>
        {displayedExcercises.map((excercise,index)=>(
         <ExcerciseCard key={index} excercise={excercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {excercises.length>9 && (<Pagination color='standard' shape='rounded' defaultPage={1}count={Math.ceil(excercises.length / excercisesPerPage)} page={currentPage} onChange={paginate} size='large'/>)}

      </Stack>

    </Box>
  )
}

export default Excercise