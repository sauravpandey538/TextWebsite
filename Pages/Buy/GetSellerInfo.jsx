import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Heading,
  Box,
  Avatar,
  Image,
  Flex,
  ButtonGroup,
  Divider,
  Text,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import { CheckCircleIcon } from "@chakra-ui/icons";
export default function GetSellerInfo() {
  const Sellerinfo = [
    {
      name: "Assignment",
      inf: "When you are entrusted with an assignment,you do your best.",
      cost: "500",
      services: [
        "Pay for your single assignment.",
        "Safe pay with esewa",
        "Rely on us for assignments",
        "Return back money within 3 days of deadline if any error occurs.",
        "Rely on us for your credential details.",
        "We promise for less than 75% similarities",
      ],
    },
    {
      name: "Subject",
      inf: "Fully rely on us for a single subject",
      services: [
        "Pay for your subject assignment.",
        "Equivalent to 4 assignment count",
        "Rely on us for time",
        "Return back your full money within 3 days of deadline if any error occurs in any assignment count.",
        "Rely on us for your credentials details.",
        "We promise for less than 75% similarities",
      ],
      cost: "1500",
    },
    {
      name: "Semister",
      inf: "Say good bye to your assignments. We will do everything for you",
      services: [
        "Pay for your single assignment.",
        "Equivalent to 20 assignment count",
        "Rely on us for a full semester",
        "Return back full money before 3 day of deadline of a submission if we fails for your  single assignment",
        "Rely on us for your credentials details.",
        "We promise for less than 70% similarities",
      ],
      cost: "7000",
    },
  ];

  return (
    <>
      <Heading color={"teal"} textAlign={"center"} mt={"100px"}>
        Subscribe to CollegeWorksPro{" "}
      </Heading>
      <Flex
        mx={"auto"}
        paddingLeft={{ base: "10px", lg: "none" }}
        gap={"10px"}
        mt={"20px"}
        // justifyContent={"center"}
        justifyContent={{ base: "none", lg: "center" }}
        overflowX={"scroll"}
      >
        {Sellerinfo.map((seller, index) => (
          <Card
            key={index}
            minW={{ base: "300px", lg: "sm" }}
            maxW={"sm"}
            minH={"md"}
            border={"2px solid black"}
            textAlign={"left"}
          >
            <CardBody>
              <Stack mt="6">
                <Heading size="md">{seller.name} Wise</Heading>
                <Text
                  color="black"
                  fontSize="2xl"
                  fontWeight={"bold"}
                  display={"flex"}
                >
                  Nrs.{seller.cost}{" "}
                  <Text
                    fontSize={"10px"}
                    color={"gray.600"}
                    pt={"14px"}
                    pl={"3px"}
                  >
                    {" "}
                    per {seller.name}
                  </Text>
                </Text>
                <Text fontSize={"11px"} fontWeight={"bold"} color={"gray.600"}>
                  {seller.inf}
                </Text>
                <Box my={"10px"}>
                  {seller.services.map((service) => (
                    <Text display={"inline-flex"} color={"gray.600"}>
                      <Box mr="10px">
                        <CheckCircleIcon fontSize="20px" color={"black"} />
                      </Box>
                      {service}
                    </Text>
                  ))}
                </Box>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                as="a"
                width={"100%"}
                variant="solid"
                colorScheme="blue"
                rightIcon={<FaArrowRightLong />}
                href="https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI="
              >
                Upgrade now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  );
}
