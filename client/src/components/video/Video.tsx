import {  Grid2, Typography, Box,   } from "@mui/material";
import { FloatingParticipantView } from './FloatingParticipant';
import "../../styles/styles.css"

type People = {
  id : number,
  name : string,
  profession : string
}


const people : People[] = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];


export const Video = () => {

  const p = people.map(person => 

    <li className="list-style" key={person.id} >
        <FloatingParticipantView  name={person.name} profession={person.profession} />
    </li>
  )

  return (
    <>
      <Grid2
        sx={{
          height: `80%`,
          width: "100%",
          backgroundColor: "#ffff",
          borderRadius: "10px",
          position: "relative",
        }}
      > 
        <Typography> Main video </Typography>

        <Box sx={{
			height : "100%",
			width : "20%",
			position : "absolute", 
			right : "0",
			zIndex : "1", 
			top :"0"
			}}> 
            <ul>
				{p}
			</ul>
      </Box>

      </Grid2>
    </>
  );
};


