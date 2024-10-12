import { Box, Grid2 } from "@mui/material";
import VideoMain from "./video/VideoMain";
import ChatMain from "./chat/MainChat";
export const MainVideoAndChat = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#757ce8", height: "100vh" }}>
        <Grid2 container spacing={2}>
          <Grid2 size={10}>
            <VideoMain />
          </Grid2>

          <Grid2 size={2}>
            <ChatMain />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
