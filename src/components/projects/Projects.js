import React, { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Icon, Image, LinkOverlay, SimpleGrid, Text } from '@chakra-ui/react';

import { IoEye, IoPaperPlane } from 'react-icons/io5';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { projects } from './ListProjects';

import { bar } from '../../assets/img';
import './Project.css';

const ButtonDetail = motion(Flex)
const DetailProject = motion(Box)
const ButtonVisit = motion(Button)
const ImageMotion = motion(Image)

export default function Projects() {
  const [selectedId, setSelectedId] = useState(false)

  const [selectedProject, setSelectedProject] = useState(null)

  console.log(selectedProject)
  return (
    <>
      <section className="projects">
        <Container
          maxW="container.xl"
          pr={10} pl={10}
          pt={12} pb={12}
          pos="relative"
        >
          <Image
            src={bar.default} pos="absolute"
            top="20em" right="-25em" zIndex="-4"
          />
          <AnimateSharedLayout type="crossfade">
            <Flex justify="center" pos="relative" w="100%">
              <Heading as="h4" size="xl" textTransform="uppercase" textAlign="center">
                Projects

              </Heading>
              <Box
                pos="absolute" bottom="-10px"
                w="100px" h="1" bg="button.black" rounded="md" className="line-title"
              ></Box>
              <Box
                pos="absolute" bottom="-25px"
                w="40px" h="1" bg="button.black" rounded="md" className="line-title"
              ></Box>
            </Flex>

            <SimpleGrid
              columns={[1, 2, 3, 4]}
              h="auto" spacing={10}
              mt="14"
            >
              {projects.map(({ id, name, description, image, link, languages }) => (
                <DetailProject
                  direction="column" boxShadow="2xl" bg="white"
                  h="auto" rounded="lg"
                  layoutId={id} key={id}
                >

                  <Box
                    width="100%" h="48" background="gray"
                    rounded="lg" pos="relative" boxShadow="0 1px 20px rgba(0,0,0,.2)"
                    overflow="hidden" key={id}
                  >

                    <ImageMotion
                      src={image} alt="image" w="full" h="full"
                      objectFit="cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: .06 } }}
                      exit={{ opacity: 0, transition: { duration: .06 } }}
                    />

                    <ButtonDetail
                      pos="absolute" top="5" right="5" borderRadius="20px"
                      bg="button.black" color="white" align="center"
                      pt={2} pb={2} pr={4} pl={4} userSelect="none" w="48px"
                      overflow="hidden" cursor="pointer"
                      whileHover={{
                        width: "auto"
                      }}
                      onClick={() => {
                        setSelectedId(id)
                        setSelectedProject(
                          {
                            id: id,
                            name: name,
                            description: description,
                            image: image,
                            link: link,
                            languages: languages
                          }
                        )
                        document.body.style.overflow = 'hidden';
                      }}
                    >
                      <Icon as={IoEye} mr={4} />
                      <Text>Detail</Text>
                    </ButtonDetail>
                  </Box>

                  <Box p="6">
                    <Flex className="programming-language" wrap="wrap">
                      {languages && languages.map(({ id, language, color }) => (
                        <>
                          <Text mr="2" color={color} key={id}>#{language}</Text>
                        </>
                      ))}
                    </Flex>

                    <Heading
                      className="name-project" size="md" mt="6"
                    >
                      {name}
                    </Heading>
                  </Box>
                </DetailProject>
              ))}
            </SimpleGrid>

            <AnimatePresence>
              {selectedId && selectedProject && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: 'fixed', background: "rgba(0,0,0,.4)",
                      width: "100%", height: "100vh", zIndex: 1, top: 0,
                      left: 0
                    }}
                    key={selectedId}
                  >
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, transition: { duration: .06 } }}
                    exit={{ opacity: 0, transition: { duration: .06 } }}
                    style={{
                      position: 'fixed',
                      top: 0, zIndex: 2, display: 'flex',
                      justifyContent: 'center', alignItems: 'center',
                      width: "100%", height: "100vh", left: 0
                    }}
                    transition={{ duration: .2, delay: 0.15 }}
                  >
                    <Container
                      maxW="container.xl"
                      pr={10} pl={10}
                    >
                      <DetailProject
                        layoutId={selectedId}
                        w="100%" bg="white" minH="30vh"
                        rounded="lg"
                      >
                        <Flex direction="column"
                        >
                          <Flex>
                            <Box
                              width="100%" rounded="lg" bg="gray"
                              overflow="hidden" h="30vh" boxShadow="0 1px 20px rgba(0,0,0,.1)"                              
                            >
                              <ImageMotion src={selectedProject && selectedProject.image} alt="Detail Product"
                                w="100%" h="100%" objectFit="cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: .6 } }}
                                exit={{ opacity: 0, transition: { duration: .6 } }}
                              />
                            </Box>
                          </Flex>
                          <Flex layoutId={selectedId} direction="column" p={5} >
                            <Flex
                              direction="column" h="25vh" overflowY="auto">
                              <Heading as="h3" size="lg">{selectedProject && selectedProject.name}</Heading>
                              <Flex className="programming-language" wrap="wrap">
                                {selectedProject && selectedProject.languages.map(({ id, language, color }) => (
                                  <>
                                    <Text mr="2" mt="4" color={color} key={id}>#{language}</Text>
                                  </>
                                ))}
                              </Flex>
                              <Text mt={4}>
                                {selectedProject && selectedProject.description}
                              </Text>
                            </Flex>

                            <Flex mt={6}>
                              <ButtonVisit bg="button.black" color="button.white"
                                leftIcon={<IoPaperPlane />} mr={4}
                                pr={10} pl={10} disabled={selectedProject && selectedProject.link === null}
                                whileTap={{
                                  scale: .9
                                }}
                                colorScheme="button"
                              >
                                <LinkOverlay href={selectedProject && selectedProject.link} target="_blank">
                                  Visit Site
                                </LinkOverlay>
                              </ButtonVisit>
                              <Button onClick={() => {
                                setSelectedId(null)
                                document.body.style.overflow = 'visible';
                              }}>
                                Close
                              </Button>
                            </Flex>

                            {selectedProject && selectedProject.link === null && (<Text mt={3} fontSize="sm">if you want this project you can email me. Thanks!</Text>)}
                          </Flex>

                        </Flex>
                      </DetailProject>
                    </Container>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </Container>
      </section>
    </>
  )
}
