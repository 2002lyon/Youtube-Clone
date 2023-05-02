import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
// import { FaceRetouchingOffRounded } from "@mui/icons-material";

const SearchFeed = () => {
  
  const [videos, setVideos] = useState([]);
  // console.log('test');

  const { searchTerm } = useParams();

  const getData = async () => {
    const fetchedData = await fetchFromAPI(
      `search?part=snippet&q=${searchTerm}`
    );
    setVideos(fetchedData.data.items);
  };
  // console.log(videos);

  useEffect(() => {
    getData();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Results for: 
        <span style={{ color: "#F31503" }}> {searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
