import { Grid2 } from "@mui/material";
import VideoMain from "./components/video/VideoMain";
import ChatMain from "./components/chat/MainChat";

export const MainVideoAndChat = () => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={10}>
          <VideoMain />
        </Grid2>

        <Grid2 size={2}>
          <ChatMain />
        </Grid2>
      </Grid2>
    </>
  );
};
