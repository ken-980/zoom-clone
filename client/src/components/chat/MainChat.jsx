import { Box, Typography } from "@mui/material";
import ChatHeaderTabs from "./ChatHeaderTabs";
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
      <Typography sx={{ padding: "5px" }}> Meeting Details </Typography>

      <ChatHeaderTabs />
    </Box>
  );
};
export default ChatMain;
