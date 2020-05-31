/** @jsx jsx */
import { useRef } from 'react';
import {
  jsx,
  Container,
  Text,
  Flex,
  Image,
  Heading,
  Grid,
  useColorMode,
} from 'theme-ui';
import Poly from '../components/Poly';

import PageLabel from '../components/PageLabel';

const MiniDefault = ({ aboutRef }) => {
  const [colorMode] = useColorMode();

  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
        bg: 'background2',
        alignItems: 'center',
        position: 'relative',
        py: 5,
      }}
    >
      <PageLabel position={'left'} offset={'30%'}>
        Who are we?
      </PageLabel>

      <PageLabel position={'right'} offset={'60%'}>
        Why are we here?
      </PageLabel>
      <Container ref={aboutRef}>
        <Grid
          gap={4}
          rowGap={4}
          columns={[1, 'repeat(2, auto)']}
          sx={{
            my: 5,
            justifyContent: 'center',
            px: [5, 0],
          }}
        >
          <Image
            src="/rainbow.gif"
            sx={{
              filter: () => (colorMode === 'dark' ? 'invert(1)' : null),
            }}
          />
          <Grid
            sx={{
              pt: 4,
            }}
          >
            <Heading variant="sub5" pb={3}>
              ARE WE THERE YET?
            </Heading>
            <Text as="p">
              <Heading variant="sub2" sx={{ display: 'inline' }}>
                It
              </Heading>{' '}
              may seem like a fairly easy question. Yet some of the simplest
              questions in life can lead us to think deeply about ourselves, our
              work, and the world around us. Are-we-there-yet is a space where
              designers, artists, and thinkers alike can converge to discuss
              where do we go next based on projects, ideas, aesthetic and
              philosophies that inspires us today.
            </Text>
            <Text>
              In the face of recent trials, creativity is manifesting itself in
              novel forms, as acts of self-expression, reflection and
              collaboration. Are-we-there-yet is here to propel a multifaceted
              perspective shift in the creative world. It is a place to discover
              budding ideas that may sound unattainable, surprising, or even
              dangerous. New paths are being paved, and you are the pavers.
            </Text>
          </Grid>
        </Grid>
      </Container>
      <Poly />
    </Flex>
  );
};

export default MiniDefault;
