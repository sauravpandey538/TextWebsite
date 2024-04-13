import { React, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  useDisclosure,
  Spacer,
  Box,
  Flex,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { FaBookOpenReader } from "react-icons/fa6";
import { AiFillFilePdf } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

export default function SemisterPdfBth({ Semister }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pdfList = [
    { id: 1, title: "a" },
    { id: 2, title: "b" },
    { id: 3, title: "c" },
    { id: 4, title: "d" },
    { id: 5, title: "e" },
    { id: 6, title: "f" },
    { id: 7, title: "c" },
    { id: 8, title: "d" },
    { id: 9, title: "e" },
    { id: 610, title: "f" },
    { id: 62, title: "f" },
    { id: 723, title: "c" },
    { id: 8123, title: "d" },
    { id: 9123, title: "e" },
    { id: 61230, title: "f" },
  ];
  return (
    <>
      <Button
        colorScheme="blue"
        mx={"auto"}
        mb={"20px"}
        fontFamily="Arial, sans-serif"
        gap={"10px"}
        leftIcon={<FaBookOpenReader />}
        onClick={onOpen}
      >
        {" "}
        I belong to {Semister}'th Semester{" "}
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="outside"
        minW={{ base: "md", lg: "xl" }}
      >
        <ModalOverlay />s
        <ModalContent>
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="25px"
            color={"teal"}
          >
            <Box mr="10px">
              <AiFillFilePdf fontSize="20px" />
            </Box>
            {Semister}'th Semister PDF_Hub
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} maxH={"600px"} overflow={"scroll"}>
            {pdfList.map((pdf) => (
              <Flex
                key={pdf.id}
                mb={"15px"}
                border={"1px solid black"}
                borderRadius={"10px"}
                pl={"10px"}
              >
                <Text
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.600"
                >
                  <Box mr="10px" textColor={"red.500"}>
                    <AiFillFilePdf fontSize="20px" />
                  </Box>
                  {pdf.title}
                </Text>
                <Spacer />
                <Button
                  leftIcon={<IoEyeSharp />}
                  colorScheme="blue"
                  fontFamily="Arial, sans-serif"
                  my={"auto"}
                >
                  View Pdf
                </Button>
              </Flex>
            ))}
          </ModalBody>
          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
