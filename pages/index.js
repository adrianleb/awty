/** @jsx jsx */

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
          <Bg url="/headless.glb" objKey={'Cube'} />

          <Container
            sx={{
              textAlign: 'center',
              py: 3,
              pt: 6,
              pb: 5,
            }}
          >
            <Styled.h1
              sx={{
                textAlign: 'center',
                color: 'accent',
              }}
            >
              Are We There Yet
            </Styled.h1>
            <Heading variant="sub4">
              Micro festival showcasing lightning talks on the future of
              creativity
            </Heading>
            <Heading variant="sub4">May 31, June 1-2, 2020</Heading>

            <Grid
              gap={2}
              columns={'repeat(2, auto)'}
              sx={{
                my: 4,
                justifyContent: 'center',
              }}
            >
              <Button>Ticket</Button>
              <Button variant="text">Program</Button>
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
          <PageLabel position={'left'} offset={'40%'}>
            Who are we?
          </PageLabel>

          <PageLabel position={'right'} offset={'60%'}>
            Why are we here
          </PageLabel>
          <Container>
            <Grid
              gap={4}
              rowGap={4}
              columns={'repeat(2, auto)'}
              sx={{
                my: 5,
                justifyContent: 'center',
              }}
            >
              <Image src="/rainbow.gif" />
              <Grid
                sx={{
                  pt: 4,
                }}
              >
                <Heading variant="sub2" pb={3}>
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
          sx={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <PageLabel position={'left'} offset={'30%'}>
            Speakers
          </PageLabel>

          <PageLabel position={'right'} offset={'60%'}>
            Speakers
          </PageLabel>

          <Container
            sx={{
              py: 5,
            }}
          >
            <PolyBg />
            <PolyRight />
            <SpeakersLayout />
            <Grid columns={2}>
              {speakers.map(({ title, name, photo, time, jobTitle }) => {
                return (
                  <SpeakerCard {...{ title, name, photo, time, jobTitle }} />
                );
              })}
            </Grid>
          </Container>
        </Box>
        <Footer />
      </Box>
    </AnimatedLayout>
  );
};
