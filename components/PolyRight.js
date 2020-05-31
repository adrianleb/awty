import { Flex, IconButton, Box } from 'theme-ui';

import icons from './Icons';

const PolyRight = ({ offset }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: -1,
        top: offset,
        bottom: 0,
        right: '-300px',
      }}
    >
      <IconButton
        sx={{
          width: '700px',
          transform: 'rotate(60deg)',
          stroke: 'transparent',
          fill: 'background2',
        }}
      >
        {icons.poly2}
      </IconButton>
    </Box>
  );
};

export default PolyRight;
