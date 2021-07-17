import React, { useState } from 'react'
import { Container, Flex, Icon, Link, Image, Text } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoPaperPlane, IoReorderThreeOutline } from 'react-icons/io5';
import { MdArrowUpward } from 'react-icons/md';
import { motion } from 'framer-motion';

import { logo } from '../../assets/img';
import './Header.css';

const BoxSocmed = motion(Flex)
const BoxSidebar = motion(Flex)


export default function Header() {
  const boxSocmedContainer = {
    not: { scale: 1 },
    hover: { scale: 1 }
  }

  const boxSocmedChildren = {
    not: { opacity: 0, y: -30, zIndex: -4 },
    hover: { opacity: 1, y: -5, zIndex: -4, transition: { type: "spring", stiffness: 110 } }
  }

  const boxSidebar = {
    hide: { opacity: 0, y: -25, zIndex: -4 },
    show: { opacity: 1, y: 0, zIndex: 4 }
  }

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <header>
        <Container maxW="container.xl" p={[8, 10, 8, 10]}>
          <Flex justify="space-between" align="center">
            <Image src={logo.default} alt="" className="logo" />
              
            <Flex align="center" className="links-socmed">
              <Link isExternal href="https://www.instagram.com/titoshadam">
                <BoxSocmed
                  className="box-socmed"
                  align="center"
                  justify="center" mr={8}
                  whileHover="hover"
                  initial="not"
                  variants={boxSocmedContainer}
                >
                  <Icon as={IoLogoInstagram} />

                  <motion.div className="box-visit" variants={boxSocmedChildren}>
                    <Icon as={IoPaperPlane} />
                  </motion.div>
                </BoxSocmed>
              </Link>
              <Link isExternal href="https://github.com/Xople">
                <BoxSocmed
                  className="box-socmed"
                  align="center"
                  justify="center" mr={8}
                  whileHover="hover"
                  initial="not"
                  variants={boxSocmedContainer}
                >
                  <Icon as={IoLogoGithub} />

                  <motion.div className="box-visit" variants={boxSocmedChildren}>
                    <Icon as={IoPaperPlane} />
                  </motion.div>
                </BoxSocmed>
              </Link>
              <Link isExternal href="https://linkedin.com/in/tito-shadam-6162881b8" _activeLink={{ outline: 'none'}} outline="none">
                <BoxSocmed
                  className="box-socmed"
                  align="center"
                  justify="center" mr={6}
                  whileHover="hover"
                  initial="not"
                  variants={boxSocmedContainer}
                >
                  <Icon as={IoLogoLinkedin} />

                  <motion.div className="box-visit" variants={boxSocmedChildren}>
                    <Icon as={IoPaperPlane} />
                  </motion.div>
                </BoxSocmed>
              </Link>
            </Flex>

            <Flex align="center" className="wrapper-box-sidebar" userSelect="none" background="none">
              <Flex
                className="box-sidebar"
                justify="center"
                align="center"
                pos="relative"
                cursor="pointer"
                userSelect="none"
                onClick={() => {
                  setShowSidebar(!showSidebar)
                }}
              >
                <Icon as={IoReorderThreeOutline} size="lg" />

                <BoxSidebar
                  direction="column" className="menu-sidebar"
                  pos="absolute" top="2.5em" right="0"
                  w="200px" p={3} pl={5} pr={5} bg="white" borderRadius="inherit"
                  boxShadow="0 10px 20px rgba(0, 0, 0, .15)" cursor="auto" userSelect="none"
                  initial="hide"
                  animate={showSidebar ? "show" : "hide"}
                  variants={boxSidebar}
                >
                  <Link borderRadius="inherit">
                    <Flex align="center" p={2}>
                      <Icon as={IoLogoInstagram} mr={3} />
                      <Text fontSize="lg">Instagram</Text>
                    </Flex>
                  </Link>

                  <Link borderRadius="inherit">
                    <Flex align="center" p={2}>
                      <Icon as={IoLogoGithub} mr={3} />
                      <Text fontSize="lg">Github</Text>
                    </Flex>
                  </Link>
                  <Link borderRadius="inherit">
                    <Flex align="center" p={2}>
                      <Icon as={IoLogoLinkedin} mr={3} />
                      <Text fontSize="lg">LinkedIn</Text>
                    </Flex>
                  </Link>
                </BoxSidebar>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </header>

      <Flex 
      className="button-to-top" 
      align="center" justify="center"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <Icon as={MdArrowUpward} boxSize="2em" />
      </Flex>
    </>
  )
}
