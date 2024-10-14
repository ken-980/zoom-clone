import { Grid2 } from "@mui/material";
import { VideoInfoHeader } from "./VideoInfoHeader";
import { BottomMeetingControls } from "./BottomMeetingControls";
import { Video } from "./Video";

const VideoMain = () => {
  return (
    <Grid2
      container
      sx={{
        width: "100%",
        flexDirection: "column",
        padding: "5px",
        height: "100%",
      }}
    >
      {/* meeting header info */}
      <VideoInfoHeader />
      <Video />
      <BottomMeetingControls />
    </Grid2>
  );
};

export default VideoMain;
