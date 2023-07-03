import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { excerciseOptions, fetchData } from "../utils/fetchData";



const SearchExcercises = () => {
  const [search, setSearch] = useState('')
  const [excercise, setExcercise] = useState([])

  const handleSearch=async()=>{
    if(search){
      const excerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',excerciseOptions);

      const searchedExcercises=excerciseData.fiter((excercise)=>excercise.name.toLowerCase().includes(search)
      ||excercise.target.toLowerCase().includes(search)
      ||excercise.equipment.toLowerCase().includes(search)
      ||excercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExcercise(searchedExcercises);
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "30px", xs: "17px" },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Incredible workouts
        <br />
        you must try
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", borderColor: "none",border:'none', borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
            color:"none",
            borderColor:"pink"
          }}
          height="76px"
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          placeholder="Search Excercise..."
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "pink",
            color: "white",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right:0
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
