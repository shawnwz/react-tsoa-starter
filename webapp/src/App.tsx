import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import './styles/App.scss';

function App(): JSX.Element {
  return (
    <>
      <Flex h="100vh" maxH="100vh" direction="column">
        <Box>
          <p>This is Box</p>
        </Box>
      </Flex>
      <Flex h="100vh" maxH="100vh" direction="row" />
    </>
  );
}

export default App;
