import { Box, Flex, Link, Text, Button, Spacer } from "@chakra-ui/react";
import { GiProgression } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      py={5}
      as="nav"
      color="white"
      position="sticky"
      bgColor={isScrolled ? "transparent" : "#2A0134"}
      top={0}
      zIndex={999}
      transition="background-color 3s ease-in-out"
    >
      <Flex
        width="80%"
        mx={"120px"}
        borderRadius={"30px"}
        bg={isScrolled ? "black" : "#2A0134"}
        alignItems="center"
        justify="space-between"
        padding="22px"
        color="white"
        transition="background-color 0.3s ease-in-out"
      >
        <Box ml={"100px"} fontSize="xl" fontWeight={700}>
          <Link
            fontSize="3xl"
            fontWeight="bold"
            display="inline-flex"
            alignItems="center"
            mr={4}
            mt={6}
          >
            <GiProgression />{" "}
            <Text as="span" ml={2} mt={2}>
              SAURAV
            </Text>
          </Link>

          <Text display="inline-flex" alignItems="center">
            <Link mx={2} href="#">
              Product
            </Link>
            <IoIosArrowDown />
          </Text>
          <Text display="inline-flex" alignItems="center" ml={4}>
            <Link mr={2} href="#">
              Connect
            </Link>
            <IoIosArrowDown />
          </Text>
          <Text display="inline-flex" alignItems="center" ml={4}>
            <Link mr={2} href="#">
              Learn
            </Link>
            <IoIosArrowDown />
          </Text>
          <Text display="inline-flex" alignItems="center" ml={4}>
            <Link mr={2} href="#">
              Company
            </Link>
            <IoIosArrowDown />
          </Text>
          <Text display="inline-flex" alignItems="center" ml={4}>
            <Link href="#" mr={2}>
              Pricing
            </Link>
            <IoIosArrowDown />
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Button mr={5} variant="unstyled" fontSize="xl" fontWeight={700}>
            Login
          </Button>
          <Button
            fontSize="xl"
            fontWeight={500}
            colorScheme="teal"
            bgGradient="linear(to-r, #ba0b34, yellow.400)"
          >
            Start now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
