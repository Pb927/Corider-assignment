import { Button, Flex, Input } from "@chakra-ui/react";
import Image from "next/image";
import paperclip from "../../public/assets/paperclip.svg";
import send from "../../public/assets/send-03.svg";
import Attachments from "./attachments";
import { useState } from "react";

export default function () {
  const [toggle, setToggle] = useState(false);

  return (
    <Flex
      py="0.5rem"
      px="1rem"
      alignItems="center"
      justifyContent="flex-end"
      gap="0.75rem"
    >
      <Flex
        gap="1rem"
        flex={1}
        borderRadius="0.5rem"
        py="0.6875rem"
        px="0.75rem"
        bgColor="white"
      >
        <Input placeholder="Reply to @Pradum Bhardwaj" variant="unstyled" />
        {toggle && <Attachments />}
        <Image
          src={paperclip}
          alt="paperclip"
          onClick={() => setToggle(!toggle)}
          style={{ cursor: "pointer" }}
        />
        <Image src={send} alt="send" style={{ cursor: "pointer" }} />
      </Flex>
    </Flex>
  );
}
