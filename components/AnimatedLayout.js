/** @jsx jsx */

import { useState, createRef, useRef, useEffect } from 'react';
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
import { useSpring, a, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Nav from '../components/Nav';
import Header from '../components/Header';

const width = 380;

const AnimatedLayout = ({ children }) => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const open = ({ canceled }) => {
    set({ x: width, config: canceled ? config.wobbly : config.stiff });
  };
  const close = (velocity = 0) => {
    set({ x: 0, config: { ...config.stiff, velocity } });
  };

  const bind = useDrag(
    ({ down, first, last, vxvy: [vx], movement: [mx], cancel, canceled }) => {
      if (mx < width * 0.7) {
        close(vx)
      } else {
      set({ x: down ? mx : width, immediate: down, config: { duration: 100 } });
      }
    },
    {
      initial: () => [x.get()],
      threshold: 10,
      bounds: { right: width + 100 },
      // bounds: { right: 0, left: 0 }, axis: 'x', rubberband: true
    }
  );

  const display = x.to((px) => (px > 0 ? 'block' : 'none'));

  const bgStyle = {
    opacity: x.to([0, width], [0, 1], 'clamp'),
    touchAction: x.to((v) => (v > 0 ? 'none' : 'auto')),
    display: x.to((v) => (v > 0 ? 'block' : 'none')),
    overflow: x.to((v) => (v > 0 ? 'hidden' : 'auto')),
  };

  return (
    <>
      <Box sx={{}}></Box>
      <a.div
        {...bind()}
        sx={{
          position: 'fixed',
          width: () => `calc(100vw + ${width}px)`,
          bg: 'background',
          height: '100vh',
          left: () => `calc(-100vw - ${width}px)`,
          zIndex: 100,
        }}
        style={{ display, x }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: () => `${width}px`,
          }}
        >
          <Nav width={width} />
        </Box>
      </a.div>

      <a.div
        sx={{
          width: '100vw',
          top: 0,
          left: 0,
          position:'fixed',
          zIndex: 3,
          height: '100vh',
          bg: 'rgba(0,0,0,0.5)',
        }}
        style={bgStyle}
        onClick={() => {
          if (x.get() > 10) close(1);
        }}
      >
       
      </a.div>
      <a.div
          sx={{
            position: 'fixed',
            bg: 'rgba(255, 255, 255, 0.1)',
            zIndex: 2,
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Header onNavOpen={open} />
        </a.div>
        {children}
    </>
  );
};

export default AnimatedLayout;
