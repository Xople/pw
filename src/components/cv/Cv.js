import React from 'react';
import { Box, Button, Container, Flex, Heading, Image } from '@chakra-ui/react';
import { IoArrowDownOutline } from 'react-icons/io5';

import { leafCv, illustrationCv } from '../../assets/img';
import './Cv.css';

export default function Cv() {
  return (
    <>
      <Box className="cv" bg="button.black" color="button.white">
        <Container
          maxW="container.xl" pos="relative"
          pr={10} pl={10}
          pt={8} pb={8}
          overflow="hidden"
        >
          <Flex direction="column" align="center" justify="center">
            <Heading as="h3" size="md"
              fontWeight="Regular" textAlign="center">Download CV For Further Information</Heading>
            <Button
              rightIcon={< IoArrowDownOutline />}
              bg="button.white" color="button.black"
              pl={8} pr={8}
              mt={6}
            >Dowload CV</Button>
          </Flex>

          <Image
            src={leafCv.default} alt="leaf"
            pos="absolute" top="-6" left="10" opacity=".3"
          />
          <Image
            src={illustrationCv.default} alt="leaf"
            pos="absolute" top="3" right="10" opacity=".3" className="left-img"
          />
        </Container>
      </Box>
    </>
  )
}
