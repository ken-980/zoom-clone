import { Grid2, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import BackHandIcon from "@mui/icons-material/BackHand";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallEndIcon from "@mui/icons-material/CallEnd";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MessageIcon from "@mui/icons-material/Message";

export const BottomMeetingControls = () => {
  return (
    <>
      <Grid2
        container
        sx={{
          height: `10%`,
          width: "100%",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Grid2>
          <Button
            sx={{
              backgroundColor: "rgb(17 24 39)",
              color: "#ffff",
            }}
          >
            <ContentCopyIcon />
          </Button>
        </Grid2>

        <Grid2 container gap={1}>
          {/* mic icon */}
          <Grid2>
            <Button
              sx={{
                backgroundColor: "rgb(17 24 39)",
                color: "#ffff",
                fontSize: "10px",
              }}
            >
              <MicIcon />
            </Button>
          </Grid2>

          <Grid2>
            <Button
              sx={{
                backgroundColor: "rgb(17 24 39)",
                color: "#ffff",
                fontSize: "10px",
              }}
            >
              <VideocamIcon />
            </Button>
          </Grid2>

          <Grid2>
            <Button
              sx={{
                backgroundColor: "rgb(17 24 39)",
                color: "#ffff",
                fontSize: "10px",
              }}
            >
              <StopScreenShareIcon />
            </Button>
          </Grid2>
          <Grid2>
            <Button
              sx={{
                backgroundColor: "rgb(17 24 39)",
                color: "#ffff",
                fontSize: "10px",
              }}
            >
              <EmojiEmotionsIcon />
            </Button>
          </Grid2>
          <Grid2>
            <Button
              sx={{
                backgroundColor: "rgb(17 24 39)",
                color: "#ffff",
                fontSize: "10px",
              }}
            >
              <BackHandIcon />
            </Button>
          </Grid2>

          <Grid2>
            <Button
              sx={{
                backgroundColor: "rgb(17 24 39)",
                color: "#ffff",
                fontSize: "10px",
              }}
            >
              <MoreVertIcon />
            </Button>
          </Grid2>

          <Grid2>
            <Button
              sx={{
                backgroundColor: "#bd2621",
                color: "#fff",
                fontSize: "10px",
              }}
            >
              <CallEndIcon />
            </Button>
          </Grid2>
        </Grid2>

        {/* add participant and message */}
        <Grid2 container gap={2}>
          <Grid2>
            <Button
              sx={{
                backgroundColor: "rgb(17 24 39)",
                color: "#ffff",
                fontSize: "10px",
              }}
            >
              <PersonAddIcon />
            </Button>
          </Grid2>

          <Grid2>
            <Button
              sx={{
                backgroundColor: "rgb(17 24 39)",
                color: "#ffff",
                fontSize: "10px",
              }}
            >
              <MessageIcon />
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};
