import React from 'react'
 
import { Grid, Box, Typography } from "@mui/material";

function Planed() {
  return (
    <div> 
     <Grid container spacing={2} sx={{ height: "100vh", padding: 2 }}>
 
      <Grid item xs={12} md={2}>
        <Box
          sx={{
            backgroundColor: "#263238",
            color: "white",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6">Dashboard</Typography>
          <Typography variant="body2">Home</Typography>
          <Typography variant="body2">Analytics</Typography>
          <Typography variant="body2">Reports</Typography>
        </Box>
      </Grid>

      {/* Main Section */}
      <Grid item xs={12} md={10}>
        {/* Header / Navbar */}
        <Box
          sx={{
            backgroundColor: "#37474F",
            color: "white",
            padding: 2,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6">Welcome, User!</Typography>
        </Box>

        {/* Content Blocks */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "#FF8A80",
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6">Analytics</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "#81C784",
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6">Revenue</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "#64B5F6",
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6">Users</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

     </div>
  )
}

export default Planed