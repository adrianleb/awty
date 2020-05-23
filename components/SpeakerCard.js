/** @jsx jsx */

import {
  jsx,
  Styled,
  Container,
  Text,
  Flex,
  Box,
  Image,
  Heading,
  useColorMode,
  Input,
  Grid,
  Button,
  IconButton,
} from 'theme-ui';
const SpeakerCard = ({ title, speakers, time }) => {
  const [colorMode] = useColorMode();
  return (
    <Box
      key={`${title}_${time}`}
      sx={{
        p: 4,
      }}
    >
      <Heading
        variant="styledsub3"
        sx={{
          mb: 3,
        }}
      >
        <span
          sx={{
            variant: 'styles.sub3bg',
          }}
        >
          {title}
        </span>
      </Heading>
      <Grid columns={['auto', 'auto auto']}>
        <Grid gap={3}>
          {speakers.map(({ photo, name, jobTitle }) => (
            <Grid
              columns={'repeat(2, auto)'}
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                // variant: 'speakermobile',
              }}
            >
              <Box
                sx={{
                  width: 'photos',
                  height: 'photos',
                  borderRadius: 'round',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  sx={{
                    width: 'photos',
                    height: 'photos',
                    borderRadius: 'round',
                    '&::before': {
                      content: '""', // ::before and ::after both require content
                    },
                    // filter: (theme) => {
                    // console.log(theme);
                    // return colorMode === 'dark' ? 'invert(1)' : null;
                    // },
                  }}
                  src={photo}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: (theme) =>
                      `linear-gradient(120deg, ${theme.colors.background2}, ${theme.colors.accent})`,
                    opacity: '.5',
                  }}
                ></Box>
              </Box>
              <Grid
                sx={{
                  rowGap: 0,
                }}
              >
                <Text variant="boldedP">{name}</Text>
                <Text>{jobTitle}</Text>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid
          columns={['auto auto auto', 'auto']}
          sx={{
            borderLeft: [null, '2px solid'],
            borderLeftColor: [null, 'accent'],

            // borderLeft: ['0px solid', '2px solid'],
            borderTop: ['2px solid', '0px solid'],
            borderTopColor: 'accent',

            // borderColor: 'red',

            px: [null, 3],
            py: [3, null],
            rowGap: 0,
            alignContent: 'center',
          }}
        >
          <Text>{time.tz('America/Los_Angeles').format('ha z')}</Text>
          <Text>{time.tz('Europe/Amsterdam').format('ha z')}</Text>
          <Text>{time.tz('Asia/Tokyo').format('ha z')}</Text>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpeakerCard;
