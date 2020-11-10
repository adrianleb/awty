/** @jsx jsx */
import { useRef } from 'react';
import sessions from '../../content/sessions';

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
  useColorMode,
  Button,
  IconButton,
} from 'theme-ui';
import PageLabel from '../../components/PageLabel';
import { useRouter } from 'next/router';
import { useSpring, config } from 'react-spring';

import AnimatedLayout from '../../components/AnimatedLayout';
import Footer from '../../components/Footer';
import Poly from '../../components/Poly';
import PolyBg from '../../components/PolyBg';
import PolyRight from '../../components/PolyRight';
import SpeakerCard from '../../components/SpeakerCard';
import SessionsLayout from '../../components/SessionsLayout';
import speakers from '../../content/speakers';
import dynamic from 'next/dynamic';
const Bg = dynamic(() => import('../../components/Bg'), { ssr: false });

export default (props) => {
  console.log(props);

  const router = useRouter();
  const { id } = router.query;

  const session = sessions[id];

  const [colorMode] = useColorMode();

  // const shapes = [
  //   // ['/headless.glb', 'Cube', [1, 1, 1]],
  //   ['/Box.glb', 'mesh_0', [0.8, 0.8, 0.8]],
  //   //  ['/Avocado.glb', 'Avocado', [1, 1, 1]],
  //   // ['/Duck.glb', 'LOD3spShape'],
  // ];

  // const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // const [objurl, objkey, objscale] = sample(shapes);
  // const aboutRef = useRef();
  const programRef = useRef();

  // const [y, setY] = useSpring(() => ({
  //   // immediate: false,
  //   // config: config.slow,
  //   y: 0,
  //   onChange: (props) => {
  //     window.scroll(0, props.y);
  //   },
  // }));

  // const scrollToRef = (ref) => {
  //   setY({ y: 300 });
  // };
  return (
    <AnimatedLayout>
      <Box
        sx={{
          mx: 'auto',
        }}
      >
        <Box
          ref={programRef}
          id="program"
          sx={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <PageLabel position={'left'} offset={'10%'}>
            Talk
          </PageLabel>

          {/* <PageLabel position={'left'} offset={'70%'}>
            Talk
          </PageLabel> */}

          <PageLabel position={'right'} offset={'40%'}>
            Talk
          </PageLabel>
          {/* 
          <PageLabel position={'right'} offset={'80%'}>
            Speakers
          </PageLabel> */}

          <Container
            sx={{
              py: 6,
              // pb: 5,
            }}
          >
            <PolyBg offset={'20%'} />
            <PolyRight offset={'-10%'} />
            <Box sx={{}}>
              <Image
                sx={{
                  width: '100%',
                }}
                src="http://placekitten.com/600/400"
              />

              <Grid
                sx={{
                  rowGap: 3,
                  pt: 4,
                }}
              >
                <Heading
                  variant="simpleSub4"
                  sx={
                    {
                      // marginBottom: '5',
                    }
                  }
                >
                  {session.title}
                </Heading>
                {session.speakers.map(({ name, jobTitle }) => {
                  return (
                    <Text variant="simpleSub3">
                      {' '}
                      {name}, {jobTitle}
                    </Text>
                  );
                })}
                <Text>{session.description}</Text>
              </Grid>
            </Box>
            {/* <SessionsLayout /> */}
          </Container>
        </Box>
        <Footer />
      </Box>
    </AnimatedLayout>
  );
};
