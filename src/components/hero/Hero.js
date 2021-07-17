import React from 'react';
import {
  Container,
  Flex, SimpleGrid,
  Heading, Button,
  Box,
  Image
} from '@chakra-ui/react';

import './Hero.css';
import { bar, lineRound, hero } from '../../assets/img';
import { motion } from 'framer-motion';

const ButtonMotion = motion(Button)

export default function Hero() {
  return (
    <>
      <section className="hero">
        <Container
          maxW="container.xl"
          pr={10} pl={10}
          pt={12} pb={12} mt={10}
          overflow="hidden"
        >

          <SimpleGrid
            columns={2}
            minChildWidth="334px"
            spacing="2em"
          >
            <Flex direction="column" className="left" pr={8} pt={5}>
              <Heading as="h6" size="sm" mb={5}>WELCOME I'M</Heading>
              <Heading as="h4" mb={5}>Tito Shadam Fatwiandika Husein</Heading>
              <span>Front End Developer</span>

              <ButtonMotion
                mt={5}
                isFullWidth={false} size="lg"
                bg="button.black" color="button.white"
                w="44" colorScheme="button"
                whileTap={{
                  scale: .9
                }}
              >
                <span>
                  Hire Me

                </span>
              </ButtonMotion>
            </Flex>
            <Flex className="right">
              <Box bg="gray" w="full" h="sm" rounded="md" pos="relative" boxShadow="2xl">
                <Image
                  src={hero.default} alt="hero image" w="full" h="full"
                  objectFit="cover" filter="grayscale(.8)" rounded="md"
                />

                <Image src={bar.default} alt="bar" pos="absolute"
                  top="30" left="-64" zIndex={-4} />
                <Image src={lineRound.default} alt="line-round" pos="absolute" bottom="-30" right="-30"
                  opacity={.9} />
              </Box>
            </Flex>
          </SimpleGrid>

        </Container>
      </section>
    </>
  )
}
