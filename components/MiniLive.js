/** @jsx jsx */
import { useRef } from 'react';
import {
  jsx,
  Container,
  Text,
  Flex,
  Image,
  Box,
  Heading,
  Grid,
  useColorMode,
} from 'theme-ui';
import Poly from './Poly';

import PageLabel from './PageLabel';

const MiniLive = ({ aboutRef }) => {
  const [colorMode] = useColorMode();

  return (
    <Flex
      id="#live"
      sx={{
        width: '100%',
        justifyContent: 'center',
        bg: 'background2',
        alignItems: 'center',
        position: 'relative',
        py: 5,
      }}
    >
      <Box
        sx={{
          display: ['none', 'none', 'block'],
        }}
      >
        <PageLabel position={'left'} offset={'30%'}>
          Live
        </PageLabel>
      </Box>
      <Box
        sx={{
          display: ['none', 'none', 'block'],
        }}
      >
        <PageLabel position={'right'} offset={'60%'}>
          Live
        </PageLabel>
      </Box>
      <Container ref={aboutRef}>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 'dot',
              height: 'dot',
              borderRadius: 'round',
              bg: 'accent',
              mr: 2,
            }}
          />
          <Text variant="pageLabel">Happening Now</Text>
        </Flex>
        <iframe
          width="100%"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          allowtransparency="true"
          sx={{
            borderRadius: 5,
            maxWidth: '100%',
            border: '1px solid',
            borderColor: 'rgba(0,0,0,0.1)',
          }}
          src="https://www.crowdcast.io/e/are-we-there-yet-micro?navlinks=false&embed=true"
          // style="border: 1px solid #EEE;border-radius:3px"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allow="microphone; camera;"
        ></iframe>
      </Container>
      <Poly />
    </Flex>
  );
};

export default MiniLive;
