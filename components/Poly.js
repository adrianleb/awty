import { Flex, IconButton } from 'theme-ui';

import icons from './Icons';

const Poly = () => {
  return (
    <Flex
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: '-10px',
        justifyContent: 'center',
      }}
    >
      <IconButton
        sx={{
          // margin: '0 auto',
          zIndex: 1,
          pointerEvents: 'none',
          stroke: 'text',
        }}
      >
        {icons.poly}
      </IconButton>
    </Flex>
  );
};

export default Poly;
