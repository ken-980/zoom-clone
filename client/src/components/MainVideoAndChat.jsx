import { Grid2 } from "@mui/material";
import VideoMain from "./video/VideoMain";
import ChatMain from "./chat/MainChat";

//video and chat
export const MainVideoAndChat = () => {
  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#263238",
          height: "100vh",
          padding: "10px",
          overflow: "hidden",
        }}
        container
        spacing={2}
      >
        <Grid2 size={9}>
          <VideoMain />
        </Grid2>

        <Grid2 size={3}>
          <ChatMain />
        </Grid2>
      </Grid2>
    </>
  );
};
