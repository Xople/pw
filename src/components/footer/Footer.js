import React from 'react';

import { Container, Heading } from '@chakra-ui/react';

function Footer() {
  return (
    <>
      <footer>
        <Container
          maxW="container.xl"
          pr={10} pl={10}
          pt={5} pb={5}
          style={{
            display: "flex", flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <Heading as="h4" size="sm">Copyright &copy; {new Date().getFullYear()} Tito Shadam</Heading>
        </Container>
      </footer>
    </>
  )
}

export default Footer
