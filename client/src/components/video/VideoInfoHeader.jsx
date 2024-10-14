import { Grid2, Typography } from "@mui/material";

export const VideoInfoHeader = () => {
  return (
    <>
      <Grid2
        container
        gap={2}
        sx={{
          justifyContent: "space-between",
          width: " 100%",
          height: `10%`,
        }}
      >
        {/* icon and meeting info */}

        <Grid2>
          <Grid2
            container
            sx={{
              flexDirection: "row",
            }}
            gap={2}
          >
            <Grid2>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/zoom.png"
                alt="zoom"
              />
            </Grid2>

            <Grid2>
              <Grid2>
                <Typography sx={{ fontSize: "14px" }}>
                  {" "}
                  Time and Date{" "}
                </Typography>
              </Grid2>
              <Grid2>
                <Typography sx={{ fontSize: "16px" }}>
                  {" "}
                  Meetung Title{" "}
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>

        {/* duration */}
        <Grid2>duration</Grid2>
      </Grid2>
    </>
  );
};
