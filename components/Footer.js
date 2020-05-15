import React from 'react'
import { Button, useColorMode, Heading, Flex, MenuButton, IconButton, Grid, Text } from 'theme-ui'
import icons from './Icons';

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const {tw, fb, insta, moon} = icons;
  return (
    <Grid columns={2} sx={{
      alignItems: 'center',
      p: 3
    }}>

      <Text>
      © 2020 arewethereyet.club
      </Text>

   
      <Grid gap={2} columns={"repeat(4, auto)"} sx={{
        justifyContent:'flex-end'
      }}>
    <IconButton>{tw}</IconButton>
    <IconButton>{insta}</IconButton>
    <IconButton>{fb}</IconButton>
    </Grid>
    </Grid>
  )
}

export default Footer
