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
  Input,
  Grid,
  Button,
  IconButton,
} from 'theme-ui';
const SpeakerCard = ({ title, name, photo, time, jobTitle }) => {
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
            // bg: 'primary',
            // boxShadow: () => `0.4em 0 0 #000, -0.4em 0 0 #000`,
          }}
        >
          {title}
        </span>
      </Heading>
      <Grid columns={'auto auto'}>
        <Grid
          columns={'repeat(2, auto)'}
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Image
            sx={{
              width: 'photos',
              height: 'photos',
              borderRadius: 'round',
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
        <Grid
          sx={{
            borderLeft: '2px solid',
            borderColor: 'accent',
            px: 3,
            rowGap: 0,
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
