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
      <Grid 
        columns={'auto auto'}
      >
        <Grid gap={3}>
          {speakers.map(({ photo, name, jobTitle }) => (
            <Grid
              columns={'repeat(2, auto)'}
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                variant: 'speakermobile',
              }}
            >
              <Image
                sx={{
                  width: 'photos',
                  height: 'photos',
                  borderRadius: 'round',
                  // filter: (theme) => {
                  // console.log(theme);
                  // return colorMode === 'dark' ? 'invert(1)' : null;
                  // },
                }}
                src={photo}
              />
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
          sx={{
            borderLeft: '2px solid',
            borderColor: 'accent',
            px: 3,
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
