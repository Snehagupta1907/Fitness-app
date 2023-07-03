import { Box } from "@mui/material";
import React, { useState } from "react";
import Excercise from "../components/Excercise";
import SearchExcercises from "../components/SearchExcercises";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <Box>
      <Banner />
      <SearchExcercises />
      <Excercise />
    </Box>
  );
};

export default Home;
