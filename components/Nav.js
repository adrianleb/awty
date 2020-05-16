/** @jsx jsx */

import { useState, createRef, useRef, useEffect } from 'react';

import { Box, jsx, NavLink, Heading } from 'theme-ui';
import clamp from 'lodash.clamp';
import { useGesture } from 'react-with-gesture';

import { useSpring, a, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const Drawer = ({ isOpen, onClose, width = 200 }) => {
  return (
    <Box sx={{
      p: 4,
      pt: 3
    }}>
      <Heading
        variant="logo"
        sx={{
          mx: 'auto',
        }}
      >
        AWTY
      </Heading>

      <Box sx={{
        pt: 4
      }}>
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
        <NavLink href="#!" p={2}>
          About
        </NavLink>
      </Box>
    </Box>
  );
};

export default Drawer;
