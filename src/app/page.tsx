"use client";

import Header from "@/components/header";
import Messages from "@/components/messages/main";
import Reply from "@/components/reply";
import { useMessages } from "@/lib/hooks";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      bgColor="background"
      flexDirection="column"
      height="100vh"
      width="100vw"
    >
      <Header />
      <Messages />
      <Reply />
    </Flex>
  );
}
