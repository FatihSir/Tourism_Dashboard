import React from 'react';
import { extractedData as reviews } from "../data/sample_data";
import { tokens } from "../theme";
import { Box, Typography, useTheme } from "@mui/material";

// Function to get random reviews
const getRandomReviews = (data, count) => {
  const shuffled = data.sort(() => 0.5 - Math.random()); // Shuffle the array
  return shuffled.slice(0, count); // Return the first 'count' items
};

const Reviews = () => {
  const theme = useTheme(); // Access the theme
  const colors = tokens(theme.palette.mode); // Get the current mode's color tokens

  // Get four random reviews
  const randomReviews = getRandomReviews(reviews, 4);

  return (
    <Box m="20px" p="20px" backgroundColor={colors.primary[400]} borderRadius="8px">
      {randomReviews.length > 0 ? (
        randomReviews.map((review, index) => (
          <Box key={review.Review_ID || index} mb="15px" p="10px" backgroundColor={colors.primary[500]} borderRadius="5px">
            <Typography variant="h6" color={colors.grey[100]}>
              Username: {review.Review_ID}
            </Typography>
            <Typography variant="body1" color={colors.grey[300]}>
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