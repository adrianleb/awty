/** @jsx jsx */

import { useState, createRef, useRef, useEffect, useCallback } from 'react';
import { jsx, Box, useThemeUI } from 'theme-ui';
import { useSpring, a, config } from 'react-spring';
import { useDrag, useScroll } from 'react-use-gesture';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { transparentize } from '@theme-ui/color';
const width = 300;

const AnimatedLayout = ({ children }) => {
  const { theme } = useThemeUI();
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const [{ st, xy }, setEv] = useSpring(() => ({ st: 0, xy: [0, 0] }));

  const open = ({ canceled }) => {
    set({ x: width, config: canceled ? config.wobbly : config.stiff });
  };
  const close = (velocity = 0) => {
    set({ x: 0, config: { ...config.stiff, velocity } });
  };

  const bindScroll = useScroll(
    ({ xy: [, y] }) => {
      setEv({ st: y });
    },
    { domTarget: typeof window === 'object' ? window : null }
  );

  useEffect(bindScroll, [bindScroll]);

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      setEv({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  );

  const bind = useDrag(
    ({ down, first, last, vxvy: [vx], movement: [mx], cancel, canceled }) => {
      if (mx < width * 0.7) {
        close(vx);
      } else {
        set({
          x: down ? mx : width,
          immediate: down,
          config: { duration: 100 },
        });
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
  const headerStyles = {
    backgroundColor: st.to(
      [0, 500],
      [
        transparentize(theme.colors.background, 1)(),
        transparentize(theme.colors.background, 0.1)(),
      ]
    ),
  };
  const bgStyle = {
    opacity: x.to([0, width], [0, 1], 'clamp'),
    touchAction: x.to((v) => (v > 0 ? 'none' : 'auto')),
    display: x.to((v) => (v > 0 ? 'block' : 'none')),
    overflow: x.to((v) => (v > 0 ? 'hidden' : 'auto')),
  };

  return (
    <div>
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
          position: 'fixed',
          zIndex: 3,
          height: '100vh',
          bg: 'rgba(0,0,0,0.5)',
        }}
        style={bgStyle}
        onClick={() => {
          if (x.get() > 10) close(1);
        }}
      ></a.div>
      <a.div
        sx={{
          position: 'fixed',
          // bg: () => `rgba(255, 255, 255, 0.1)`,
          zIndex: 2,
          top: 0,
          left: 0,
          right: 0,
        }}
        style={headerStyles}
      >
        <Header onNavOpen={open} />
        {/* <a.div
          sx={{
            bg: 'red',
            py: 4,
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: -1,
          }}
        ></a.div> */}
      </a.div>
      {children}
    </div>
  );
};

export default AnimatedLayout;
