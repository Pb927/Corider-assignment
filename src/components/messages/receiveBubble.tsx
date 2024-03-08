import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import verified from "../../../public/assets/check-verified-02.svg";
export default function ({ img, message }: { img: string; message: string }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "0.2rem",
      }}
      my="0.75rem"
      mx="1rem"
      maxWidth={"20rem"}
      alignSelf={"flex-start"}
    >
      <Image
        src={img}
        alt="img"
        width={30}
        height={30}
        style={{ borderRadius: 9999 }}
      />
      <Image
        src={verified}
        alt=""
        style={{ position: "relative", top: "22px", left: "-19px" }}
      />
      <Flex
        flexDirection="column"
        boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.08)"}
        p="0.5rem"
        justifyContent={"center"}
        alignItems={"center"}
        gap={"1rem"}
        borderRadius={"0rem 0.75rem 0.75rem 0.75rem"}
        bgColor={"receivedMsg"}
      >
        <Text
          textColor={"gray.100"}
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
