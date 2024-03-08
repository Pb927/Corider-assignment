import { Box, Flex, Text } from "@chakra-ui/react";

export default function ({ message }: { message: string }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "0.5rem",
      }}
      mx="1.25rem"
      my="0.75rem"
      maxWidth={"18rem"}
      alignSelf={"flex-end"}
    >
      <Flex
        flexDirection="column"
        boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.08)"}
        p="0.5rem"
        justifyContent={"center"}
        alignItems={"center"}
        gap={"1rem"}
        borderRadius={"0.75rem 0.75rem 0rem 0.75rem"}
        bgColor={"sentMsg"}
      >
        <Text
          textColor={"white"}
          fontSize={"0.875rem"}
          fontWeight={500}
          alignSelf={"stretch"}
        >
          {message}
        </Text>
      </Flex>
    </Box>
  );
}
