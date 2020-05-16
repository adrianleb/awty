import { Box, IconButton } from 'theme-ui';
import icons from '../components/Icons';

const PolyBg = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: '-300px',
        pt: 1,
      }}
    >
      <IconButton
        sx={{
          width: '700px',
        }}
      >
        {icons.poly2}
      </IconButton>
    </Box>
  );
};

export default PolyBg;
