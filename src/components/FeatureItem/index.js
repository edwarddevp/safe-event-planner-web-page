import { Box, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";

export const FeatureItem = (props) => {
  return (
    <Grid templateColumns="60px 1fr" gap={[4, , , , , 8]}>
      <Box>
        <Grid bg="primary.500" borderRadius="md" p={2} placeItems="center">
          <Icon as={props?.icon} color="white" w={10} h={10} />
        </Grid>
      </Box>
      <Grid templateRows="auto 1fr" gap={[2, , , , 4]}>
        <Text
          fontSize="2xl"
          textShadow="md"
          fontWeight="500"
          fontFamily="Noto Sans JP, sans-serif"
        >
          {props?.title}
        </Text>
        <Text
          wordBreak="break-word"
          fontSize={["md", , , , "lg"]}
          textShadow="md"
          fontWeight="500"
          fontFamily="Noto Sans JP, sans-serif"
        >
          {props?.description}
        </Text>
      </Grid>
    </Grid>
  );
};
