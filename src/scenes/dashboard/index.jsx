import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="2px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
          >
            <RateReviewOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }} />
            <Typography variant="h6" color={colors.grey[100]}>
              New Reviews
            </Typography>
            <Typography variant="h4" color={colors.grey[100]}>
              150
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
           <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
          >
            <VisibilityOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }} />
            <Typography variant="h6" color={colors.grey[100]}>
              Open Reviews
            </Typography>
            <Typography variant="h4" color={colors.grey[100]}>
              200
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
           <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
          >
            <CheckCircleOutlineIcon
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }} />
            <Typography variant="h6" color={colors.grey[100]}>
              New Reviews
            </Typography>
            <Typography variant="h4" color={colors.grey[100]}>
              350
            </Typography>
          </Box>
        </Box>


        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
          >
            <HighlightOffIcon
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }} />
            <Typography variant="h6" color={colors.grey[100]}>
              New Reviews
            </Typography>
            <Typography variant="h4" color={colors.grey[100]}>
              350
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
