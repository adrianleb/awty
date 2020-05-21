import React from 'react';
import {
  Button,
  useColorMode,
  Heading,
  Flex,
  MenuButton,
  IconButton,
  Grid,
} from 'theme-ui';
import icons from './Icons';

const Header = ({ onNavOpen }) => {
  const [colorMode, setColorMode] = useColorMode();
  const { tw, fb, insta, moon, sun } = icons;
  return (
    <Grid
      columns={['32px 1fr 1fr', 3]}
      sx={{
        alignItems: 'center',
        zIndex: 100,
        p: 3,
        px: [2, 4],
      }}
    >
      <MenuButton onClick={onNavOpen} />

      <Heading
        variant="logo"
        sx={{
          mx: 'auto',
          ml: [0, 'auto'],
        }}
      >
        AWTY
      </Heading>

      <Grid
        gap={2}
        columns={'repeat(4, auto)'}
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <IconButton>{tw}</IconButton>
        <IconButton>{insta}</IconButton>
        <IconButton>{fb}</IconButton>
        <IconButton
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          {colorMode === 'light' ? moon : sun}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
