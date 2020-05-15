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
import Header from '../components/Header';
import Footer from '../components/Footer';
import icons from '../components/Icons';

import Intro from '../content/intro.mdx';
import Intro2 from '../content/intro2.mdx';
import SpeakAt from '../content/speak-at.mdx';
import FooterText from '../content/footer.mdx';

import dynamic from 'next/dynamic';

// import Bg from '../components/Bg';

const Bg = dynamic(() => import('../components/Bg'), { ssr: false });

const PolyBg = () => {
  return (
    <Box sx={{
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: '-300px',
      pt: 1
    }}>
      <IconButton sx={{
        width: '700px',
      }}>{icons.poly2}</IconButton>
    </Box>
  )
}

const PolyRight = () => {
  return (
    <Box sx={{
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      right: '-900px',
      pt: '50%',
      opacity: 0.1
    }}>
      <IconButton sx={{
        width: '700px',
        transform: 'rotate(60deg)'
      }}>{icons.poly2}</IconButton>
    </Box>
  )
}
const Poly = () => {
  return (
    <Flex
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: '-10px',
        justifyContent: 'center',
      }}
    >
      <IconButton
        sx={{
          // margin: '0 auto',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {icons.poly}
      </IconButton>
    </Flex>
  );
};
export default () => {
  const talks = [
    {
      title: 'title gere',
      photo: 'https://www.placecage.com/c/200/200',
      name: 'mr doe',
      jobTitle: 'doer of dings',
      time: '2020-05-16',
    },
    {
      title: 'title gere',
      photo: 'https://www.placecage.com/c/200/200',
      name: 'mr doe',
      jobTitle: 'doer of dings',
      time: '2020-05-16',
    },
    {
      title: 'title gere',
      photo: 'https://www.placecage.com/c/200/200',
      name: 'mr doe',
      jobTitle: 'doer of dings',
      time: '2020-05-16',
    },
    {
      title: 'title gere',
      photo: 'https://www.placecage.com/c/200/200',
      name: 'mr doe',
      jobTitle: 'doer of dings',
      time: '2020-05-16',
    },
    {
      title: 'title gere',
      photo: 'https://www.placecage.com/c/200/200',
      name: 'mr doe',
      jobTitle: 'doer of dings',
      time: '2020-05-16',
    },
  ];

  return (
    <Box
      sx={{
        mx: 'auto',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Header />

        <Bg url="/headless.glb" objKey={'Cube'} />

        <Container
          sx={{
            textAlign: 'center',
            py: 3,
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
          <Styled.h2>
            Micro festival showcasing lightning talks on the future of
            creativity
          </Styled.h2>
          <Styled.h2>may 31, june 1-2, 2020, time time time</Styled.h2>

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
          {/* <IconButton>{icons.poly}</IconButton> */}
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
        <Container
          sx={
            {
              // maxWidth: '800px'
            }
          }
        >
          <Grid
            gap={4}
            rowGap={4}
            columns={'repeat(2, auto)'}
            sx={{
              my: 4,
              justifyContent: 'center',
            }}
          >
            {/* {//imageOrientation} */}
            <Image
              src="/rainbow.gif"
              sx={{
                // maxWidth: '380px',
                height: 'auto',
              }}
            />
            <Grid
              sx={{
                pt: 5
                // maxWidth: '400px',
                // px: 4,
              }}
            >
              <Heading>Are we there yet?</Heading>
              <Text as="p">
                It may seem like a fairly easy question. Yet some of the
                simplest questions in life can lead us to think deeply about
                ourselves, our work, and the world around us. Are-we-there-yet
                is a space where designers, artists, and thinkers alike can
                converge to discuss where do we go next based on projects,
                ideas, aesthetic and philosophies that inspires us today.
              </Text>
              <Text>
                In the face of recent trials, creativity is manifesting itself
                in novel forms, as acts of self-expression, reflection and
                collaboration. Are-we-there-yet is here to propel a multifaceted
                perspective shift in the creative world. It is a place to
                discover budding ideas that may sound unattainable, surprising,
                or even dangerous. New paths are being paved, and you are the
                pavers.
              </Text>

              {/* <Intro /> */}
            </Grid>
          </Grid>
        </Container>
        <Poly />
      </Flex>

      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Container>
          <PolyBg />
          <PolyRight />
          <Grid columns={2}>
            {talks.map(({ title, name, photo, time, jobTitle }) => {
              return (
                <Box
                  sx={{
                    p: 4,
                  }}
                >
                  <Heading>{title}</Heading>
                  <Grid columns={'auto auto'}>
                    <Grid
                      columns={'repeat(2, auto)'}
                      sx={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Image
                        sx={{
                          width: 'photos',
                          height: 'photos',
                          borderRadius: 'round',
                        }}
                        src={photo}
                      />
                      <Grid
                        sx={{
                          rowGap: 0,
                        }}
                      >
                        <Text>{name}</Text>
                        <Text>{jobTitle}</Text>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        borderLeft: '2px solid red',
                        px: 2,
                        rowGap: 0,
                      }}
                    >
                      <Text>date</Text>
                      <Text>date</Text>
                      <Text>date</Text>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Grid>
        </Container>
        {/* <Bg url="/Box.glb" objKey={'mesh_0'} /> */}
      </Box>
      <Footer />
    </Box>
  );
};
