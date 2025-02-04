import { Grid2 } from "@mui/material";
import { VideoInfoHeader } from "./VideoInfoHeader";
import { BottomMeetingControls } from "./MeetingControlsButtons";
import VideoApp from "./Video";

const VideoMain = () => {
  return (
    <Grid2 container sx={{ width: "100%", flexDirection: "column", padding: "5px", height: "100%", alignContent: "center" }}>
      
      {/* meeting header info */}
      <VideoInfoHeader />
        <VideoApp />
      <BottomMeetingControls />
    </Grid2>
  );
};

export default VideoMain;
