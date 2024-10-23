
import { Box, Typography } from "@mui/material";
import React from "react";


type People = {
  id? : number,
  name : string,
  profession : string
}

export const FloatingParticipantView : React.FC<People> = ({ name, profession}) => {
 
  return ( 
  
    <Box
      sx={{
        height: "100px",
        width: "220px",
        margin: "5px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 3px",
        borderRadius: "12px",
  
      }} >
        <Typography> {name} </Typography>
        <Typography> {profession} </Typography>
    </Box>

  
  );
};



