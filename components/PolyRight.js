import { Flex, IconButton, Box } from 'theme-ui';

import icons from './Icons';

const PolyRight = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: -1,
        top: 0,
        bottom: 0,
        right: '-900px',
        pt: '50%',
        opacity: 0.1,
      }}
    >
      <IconButton
        sx={{
          width: '700px',
          transform: 'rotate(60deg)',
        }}
      >
        {icons.poly2}
      </IconButton>
    </Box>
  );
};

export default PolyRight;
