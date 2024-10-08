import React from 'react';
import { extractedData as reviews } from "../data/sample_data";
import { tokens } from "../theme";
import { Box, Typography, useTheme } from "@mui/material";

// Function to get all reviews
const Reviews = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" p="20px" backgroundColor={colors.primary[400]} borderRadius="8px">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Box
            key={review.Review_ID || index}
            mb="15px"
            p="10px"
            backgroundColor={colors.primary[500]}
            borderRadius="5px"
          >
            <Typography variant="h6" color={colors.grey[100]}>
              Username: {review.Review_ID}
            </Typography>
            <Typography
              variant="body1"
              color={colors.grey[300]}
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {review.review}
            </Typography>
          </Box>
        ))
      ) : (
        <Box p="10px" backgroundColor={colors.primary[500]} borderRadius="5px">
          <Typography variant="body1" color={colors.grey[300]}>
            No reviews available.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Reviews;