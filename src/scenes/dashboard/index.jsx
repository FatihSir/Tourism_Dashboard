import React from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import Reviews from "../../components/Reviews";

// Statistic Box Component
const StatisticBox = ({ icon, title, value }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        {icon}
        <Typography variant="h6" color={colors.grey[100]}>
          {title}
        </Typography>
        <Typography variant="h4" color={colors.grey[100]}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

// Dashboard Header Component
const ChartHeader = ({ title, showDownloadButton }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      mt="5px"
      p="0 20px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
        {title}
      </Typography>
      {showDownloadButton && (
        <IconButton>
          <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
        </IconButton>
      )}
    </Box>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="10px">
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="105px"
        gap="2px"
      >
        {/* Statistic Boxes */}
        <StatisticBox
          icon={<RateReviewOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }} />}
          title="New Reviews"
          value="150"
        />
        <StatisticBox
          icon={<VisibilityOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }} />}
          title="Open Reviews"
          value="200"
        />
        <StatisticBox
          icon={<CheckCircleOutlineIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }} />}
          title="Resolved Reviews"
          value="350"
        />
        <StatisticBox
          icon={<HighlightOffIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }} />}
          title="Complaints"
          value="350"
        />

        {/* Line Chart Section */}
        <Box gridColumn="span 12" gridRow="span 3" backgroundColor={tokens(theme.palette.mode).primary[400]}>
          <ChartHeader title="Distribution of Compliments/Complaints over time" showDownloadButton={true} />
          <Box height="270px" m="-30px 0 0 0">
            <LineChart isDashboard={false} />
          </Box>
        </Box>

        {/* Reviews and Pie Chart Section */}
        <Box gridColumn="span 6" gridRow="span 3" backgroundColor={tokens(theme.palette.mode).primary[400]}>
          <ChartHeader title="Trip Type Distribution" showDownloadButton={false} />
          <Box height="300px" width="550px" m="-20px 10px 0 0">
            <PieChart isDashboard={true} />
          </Box>
        </Box>

        <Box gridColumn="span 6" gridRow="span 3" backgroundColor={tokens(theme.palette.mode).primary[400]}>
          <ChartHeader title="Reviews" showDownloadButton={false} />
          <Box height="300px" overflow="auto" p="10px">
            <Reviews />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;