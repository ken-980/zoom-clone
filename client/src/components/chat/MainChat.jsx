import { Box, Button, Grid2, Typography } from "@mui/material";
import ChatHeaderTabs from "./ChatHeaderTabs";
import CloseIcon from "@mui/icons-material/Close";

const ChatMain = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffff",
        borderRadius: "5px",
        margin: "0",
        height: "100%",
      }}
    >
      <Grid2
        container
        sx={{ padding: "10px 16px 10px 15px", justifyContent: "space-between" }}
      >
        <Grid2>
          <Typography sx={{ fontSize: "15px" }}> Meeting Details </Typography>
        </Grid2>

        <Grid2>
          <Button>
            <CloseIcon />
          </Button>
        </Grid2>
      </Grid2>

      <ChatHeaderTabs />
    </Box>
  );
};
export default ChatMain;
