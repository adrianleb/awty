/** @jsx jsx */
import { useRef } from 'react';
import {
  jsx,
  Styled,
  Container,
  Text,
  Flex,
  Box,
  Image,
  Heading,
  Input,
  Grid,
  Button,
  IconButton,
} from 'theme-ui';
import PageLabel from '../components/PageLabel';
import { useSpring, config } from 'react-spring';

import AnimatedLayout from '../components/AnimatedLayout';
import Footer from '../components/Footer';
import Poly from '../components/Poly';
import PolyBg from '../components/PolyBg';
import PolyRight from '../components/PolyRight';
import SpeakerCard from '../components/SpeakerCard';
import SpeakersLayout from '../components/SpeakersLayout';
import speakers from '../content/speakers';
import dynamic from 'next/dynamic';
const Bg = dynamic(() => import('../components/Bg'), { ssr: false });

export default () => {
  const shapes = [
    // ['/headless.glb', 'Cube', [1, 1, 1]],
    ['/Box.glb', 'mesh_0', [0.8, 0.8, 0.8]],
    // ['/Avocado.glb', 'Avocado', [1, 1, 1]],
    // ['/Duck.glb', 'LOD3spShape'],
  ];

  const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [objurl, objkey, objscale] = sample(shapes);
  const aboutRef = useRef();
  const programRef = useRef();

  const [y, setY] = useSpring(() => ({
    // immediate: false,
    // config: config.slow,
    y: 0,
    onChange: (props) => {
      console.log('prosp', props);
      window.scroll(0, props.y);
    },
  }));

  console.log(y, 'lala');
  const scrollToRef = (ref) => {
    console.log('scrol?');
    setY({ y: 300 });
  };
  return (
    <AnimatedLayout>
      <Box
        sx={{
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Bg
            key={`${objurl}_${objkey}`}
            url={objurl}
            objKey={objkey}
            scale={objscale}
          />

          <Container
            sx={{
              position: 'relative',
              textAlign: 'center',
              // py: 3,
              pt: 6,
              pb: 5,
              zIndex: 2,
            }}
          >
            <Heading
              variant="massive"
              sx={{
                textAlign: 'center',
                color: 'accent',
              }}
            >
              Are We There Yet
            </Heading>
            <Heading
              variant="sub4"
              sx={{
                py: [3],
                px: [5, 0],
                pt: [4],
              }}
            >
              Micro festival showcasing lightning talks on the future of
              creativity
            </Heading>
            <Heading variant="sub4">May 31, June 1-2, 2020</Heading>

            <Grid
              gap={[1, 2]}
              columns={'repeat(2, auto)'}
              sx={{
                my: 4,
                justifyContent: 'center',
              }}
            >
              <Button
                as="a"
                href="https://www.eventbrite.com/e/are-we-there-yet-creative-festival-tickets-105513112560"
              >
                Ticket
              </Button>
              <Button
                as="a"
                variant="text"
                href="#program"
                onClick={() => {
                  setY(300);
                  console.log('scroled?');
                }}
              >
                Program
              </Button>
            </Grid>
          </Container>
          <Poly />
        </Box>
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
              <Image src="/rainbow.gif" />
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
                  questions in life can lead us to think deeply about ourselves,
                  our work, and the world around us. Are-we-there-yet is a space
                  where designers, artists, and thinkers alike can converge to
                  discuss where do we go next based on projects, ideas,
                  aesthetic and philosophies that inspires us today.
                </Text>
                <Text>
                  In the face of recent trials, creativity is manifesting itself
                  in novel forms, as acts of self-expression, reflection and
                  collaboration. Are-we-there-yet is here to propel a
                  multifaceted perspective shift in the creative world. It is a
                  place to discover budding ideas that may sound unattainable,
                  surprising, or even dangerous. New paths are being paved, and
                  you are the pavers.
                </Text>
              </Grid>
            </Grid>
          </Container>
          <Poly />
        </Flex>

        <Box
          ref={programRef}
          id="program"
          sx={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <PageLabel position={'left'} offset={'10%'}>
            Speakers
          </PageLabel>

          <PageLabel position={'left'} offset={'70%'}>
            Speakers
          </PageLabel>

          <PageLabel position={'right'} offset={'40%'}>
            Speakers
          </PageLabel>
          {/* 
          <PageLabel position={'right'} offset={'80%'}>
            Speakers
          </PageLabel> */}

          <Container
            sx={{
              py: 5,
            }}
          >
            <PolyBg />
            <PolyRight offset={'50%'} />
            <SpeakersLayout />
          </Container>
        </Box>
        <Footer />
      </Box>
    </AnimatedLayout>
  );
};
