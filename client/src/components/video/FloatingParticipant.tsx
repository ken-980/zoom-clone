
import { Box } from "@mui/material";

type Props = {
  count : number
}

const FloatingParticipantView  = ({ count } : Props) => {

  return ( 
    <Box
      sx={{
        height: "135px",
        width: "230px",
        right: "3px",
        bottom: "4px",
        margin: "2px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 3px",
        borderRadius: "12px",
        position: "absolute",
      }}
    >
      <h2> participant {count} </h2>
    </Box>
  );
};


export default FloatingParticipantView;
