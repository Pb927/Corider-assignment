import { Center, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import back from "../../public/assets/Back.svg";
import edit from "../../public/assets/edit-05.svg";
import pfp1 from "../../public/assets/pfp1.png";
import pfp2 from "../../public/assets/pfp2.png";
import pfp3 from "../../public/assets/pfp3.png";
import pfp4 from "../../public/assets/pfp4.png";
import dots from "../../public/assets/dots-vertical.svg";
import { TripData } from "@/lib/hooks";

export default function () {
  return (
    <Flex
      flexDirection="column"
      gap="1rem"
      pt="1.25rem"
      px="1rem"
      pb="1rem"
      borderBottomWidth={1}
      borderColor="border"
    >
      <Flex
        alignItems="center"
        gap="0.75rem"
        alignSelf="stretch"
        textColor="secondary"
      >
        <Image src={back} alt="back" />
        <Text flexGrow={1} fontWeight={700} fontSize="1.5rem">
          Trip 1
        </Text>
        <Image src={edit} alt="edit" />
      </Flex>
      <Flex alignItems="center" gap="0.75rem" justifyContent="space-between">
        <Center gap="1rem">
          <SimpleGrid
            columns={2}
            height="fit-content"
            rounded="full"
            overflow="clip"
          >
            <Image src={pfp1} alt="" />
            <Image src={pfp2} alt="" />
            <Image src={pfp3} alt="" />
            <Image src={pfp4} alt="" />
          </SimpleGrid>
          <Container textColor="gray.100">
            <Flex gap="0.5rem" alignItems="center">
              <Text>From</Text>
              <Text textColor="secondary" fontWeight={700} fontSize="1.25rem">
                IGI Airport, T3
              </Text>
            </Flex>
            <Flex gap="0.5rem" alignItems="center">
              <Text>To</Text>
              <Text textColor="secondary" fontWeight={700} fontSize="1.25rem">
                Sector 28
              </Text>
            </Flex>
          </Container>
        </Center>
        <Image src={dots} alt="dots" />
      </Flex>
    </Flex>
  );
}
