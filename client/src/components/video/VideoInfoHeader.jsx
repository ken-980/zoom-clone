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
              alignContent: "center",
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
                <Typography sx={{ fontSize: "14px", color: "#adaeaa" }}>
                  {" "}
                  Time and Date{" "}
                </Typography>
              </Grid2>
              <Grid2>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#f1eeed",
                  }}
                >
                  {" "}
                  Meetung Title{" "}
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>

        {/* duration */}
        <Grid2>
          <Typography
            sx={{
              padding: "1px 10px 1px 10px",
              backgroundColor: "rgb(17 24 39)",
              borderRadius: "5px",
              color: "#ffff",
              fontSize: "14px",
            }}
          >
            {" "}
            00:00:00{" "}
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};
