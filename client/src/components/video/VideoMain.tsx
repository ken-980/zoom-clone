import { Grid2 } from "@mui/material";
import { VideoInfoHeader } from "./VideoInfoHeader";
import { BottomMeetingControls } from "./MeetingControlsButtons";
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
        alignContent: "center",
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
