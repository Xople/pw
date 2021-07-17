import React from 'react';
import { Box, Container, Flex, Heading, Icon, Image, SimpleGrid } from '@chakra-ui/react';
import {
  IoLogoReact,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoFigma,
  IoLogoSass
} from 'react-icons/io5';

import {
  FaBootstrap
} from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';

import { motion } from 'framer-motion';

import { skills } from '../../assets/img';
import './Skill.css';

const BoxSkill = motion(Flex);

export default function Skill() {

  const dataSkills = [
    { id: 0, name: "React JS", icon: IoLogoReact, percentage: "70%" },
    { id: 1, name: "Javascript", icon: IoLogoJavascript, percentage: "75%" },
    { id: 2, name: "HTML", icon: IoLogoHtml5, percentage: "90%" },
    { id: 3, name: "CSS", icon: IoLogoCss3, percentage: "85%" },
    { id: 4, name: "SCSS", icon: IoLogoSass, percentage: "80%" },
    { id: 5, name: "Bootstrap", icon: FaBootstrap, percentage: "85%" },
    { id: 6, name: "Figma", icon: IoLogoFigma, percentage: "70%" },
    { id: 7, name: "Adobe XD", icon: SiAdobexd, percentage: "70%" },
  ]

  const boxSkillNameContainer = {
    hide: { opacity: 1 },
    show: { opacity: 1 },
  }

  const boxSkillNameContent = {
    hide: { y: 15, opacity: 0, userSelect: "none", zIndex: -4, transition: { delay: .2 } },
    show: {
      y: -13,
      opacity: 1,
      zIndex: -4,
      userSelect: "none",
      transition: {
        delayChildren: .1,
        staggerChildren: .1,
        type: "spring", stiffness: 120
      }
    }
  }

  const boxSkillNameText = {
    hide: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <>
      <section className="skills">
        <Container
          maxW="container.xl"
          pr={10} pl={10}
          pt={12} pb="16" mt={10}
          overflow="hidden"
        >
          <SimpleGrid
            columns={[1, 2]}
            spacing="2em"
            minH="sm" h="auto"
            minChildWidth="496px" className="wrapper-skills"
          >
            <Flex align="center" pos="relative" justify="center">
              <Heading
                as="h3"
                textTransform="uppercase" size="3xl"
                letterSpacing="wide" transform="translateX(-60px)"
                color="button.black" position="relative" className="title"
              >
                Skills

                <Box
                  pos="absolute" bottom="-20px" right="-100px"
                  w="120%" h="1" bg="button.black" rounded="md" className="line-title"
                ></Box>
              </Heading>

              <Image
                src={skills.default} alt="Skills"
                pos="absolute" top="0" left="20" zIndex={-4}
                opacity={.6} className="img-skills"
              />
            </Flex>

            <Flex align="center" justify="center">
              <SimpleGrid
                columns={[2, 3, 4]}
                h="auto"
                spacing={10}
                spacingY="14" w="fit-content"
              >
                {dataSkills.map(skill => (
                  <BoxSkill
                    align="center"
                    justify="center" p={2}
                    className="box-skill" w="32" h="32"
                    rounded="lg" boxShadow="2xl" bg="button.white"
                    pos="relative" variants={boxSkillNameContainer}
                    whileHover="show" initial="hide" mt={5} key={skill.id}

                  >
                    <Icon
                      as={skill.icon} boxSize="3em" />

                    <BoxSkill
                      pos="absolute" top="-4" right="0"
                      bg="button.black" color="button.white"
                      rounded="md" pt={1} pb={1} pr={4} pl={4}
                      fontSize="sm" variants={boxSkillNameContent}
                    >
                      <motion.span variants={boxSkillNameText}>
                        {skill.name}
                      </motion.span>
                    </BoxSkill>

                    <BoxSkill
                      pos="absolute" bottom="-4" left="1"
                      bg="button.black" color="button.white"
                      rounded="md" borderTopLeftRadius="0" pt={1} pb={1} pr={4} pl={4}
                      fontSize="sm" transform="skew(10deg)" userSelect="none"
                    >
                      <span>{skill.percentage}</span>
                    </BoxSkill>
                  </BoxSkill>
                ))}
              </SimpleGrid>
            </Flex>
          </SimpleGrid>
        </Container>
      </section>
    </>
  )
}
