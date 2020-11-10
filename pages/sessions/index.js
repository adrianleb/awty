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
  useColorMode,
  Button,
  IconButton,
} from 'theme-ui';
import PageLabel from '../../components/PageLabel';
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

export default () => {
  const [colorMode] = useColorMode();

  const shapes = [
    // ['/headless.glb', 'Cube', [1, 1, 1]],
    ['/Box.glb', 'mesh_0', [0.8, 0.8, 0.8]],
    //  ['/Avocado.glb', 'Avocado', [1, 1, 1]],
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
      window.scroll(0, props.y);
    },
  }));

  const scrollToRef = (ref) => {
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
          ref={programRef}
          id="program"
          sx={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <PageLabel position={'left'} offset={'10%'}>
            Talks
          </PageLabel>

          <PageLabel position={'left'} offset={'70%'}>
            Talks
          </PageLabel>

          <PageLabel position={'right'} offset={'40%'}>
            Talks
          </PageLabel>
          {/* 
          <PageLabel position={'right'} offset={'80%'}>
            Speakers
          </PageLabel> */}

          <Container
            sx={{
              pt: 7,
            }}
          >
            <PolyBg offset={'20%'} />
            <PolyRight offset={'-10%'} />
            <Box
              sx={{
                pb: 6,
              }}
            >
              <Heading variant="sub5">Past Sessions</Heading>
              <Text
                sx={{
                  maxWidth: 600,
                }}
              >
                Here’s where you can find talks, performances and all the good
                stuffs that happened at the Arewethereyet festival.
              </Text>
            </Box>
            <SessionsLayout />
          </Container>
        </Box>
        <Footer />
      </Box>
    </AnimatedLayout>
  );
};
