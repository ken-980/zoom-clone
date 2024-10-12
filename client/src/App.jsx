import { Box, Outlet } from "@mui/material";
function App() {
  return (
    <>
      <Box sx={{ backgroundColor: "#757ce8", height: "100vh" }}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;