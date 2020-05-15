import React from 'react'
import { Button, useColorMode, Heading, Flex, MenuButton, IconButton, Grid } from 'theme-ui'
import icons from './Icons';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const {tw, fb, insta, moon} = icons;
  return (
    <Grid columns={3} sx={{
      alignItems: 'center',
      p: 3
    }}>

      <MenuButton/>

      <Heading variant="logo" sx={{
        mx: 'auto'
      }}>AWTY</Heading>

      <Grid gap={2} columns={"repeat(4, auto)"} sx={{
        justifyContent:'flex-end'
      }}>
    <IconButton>{tw}</IconButton>
    <IconButton>{insta}</IconButton>
    <IconButton>{fb}</IconButton>
    <IconButton 
    sx={{
      bg: colorMode === 'light' ? 'primary' : 'text',
      borderRadius: '50px',
      stroke: colorMode === 'light' ? 'background' : 'primary'
    }}
    onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
    {/* {colorMode === 'light' ? 'Dark' : 'Light'} */}
    
    {moon}</IconButton>
    </Grid>
    </Grid>
  )
}

export default Header
