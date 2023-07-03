import { Box } from "@mui/material";
import React, { useState } from "react";
import Excercise from "../components/Excercise";
import SearchExcercises from "../components/SearchExcercises";
import Banner from "../components/Banner";

const Home = () => {
  const [excercises, setExcercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <Banner />
      <SearchExcercises setExcercises={setExcercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Excercise setExcercises={setExcercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  );
};

export default Home;
