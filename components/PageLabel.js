import { Box, Text, Button } from 'theme-ui';

const PageLabel = ({ position, children, offset = '50' }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: offset,
        [position]: [-54, 0],
        transform: 'rotate(-90deg)',
      }}
    >
      <Text variant="pageLabel">{children}</Text>
      <Box
        sx={{
          bg: 'black',
          height: '4px',
          width: '100px',
          mt: 1,
          ml: 5,
        }}
      ></Box>
    </Box>
  );
};

export default PageLabel;
