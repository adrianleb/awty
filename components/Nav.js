/** @jsx jsx */

import { Box, jsx, NavLink, Heading } from 'theme-ui';

const Drawer = () => {
  return (
    <Box
      sx={{
        p: 4,
        pt: 3,
      }}
    >
      <Heading
        variant="logo"
        sx={{
          mx: 'auto',
        }}
      >
        AWTY
      </Heading>

      <Box
        sx={{
          pt: 4,
        }}
      >
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink
          href="https://www.eventbrite.com/e/are-we-there-yet-creative-festival-tickets-105513112560"
          target="_blank"
          p={2}
        >
          Ticket
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
