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
      <Heading>{title}</Heading>
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
            <Text>{name}</Text>
            <Text>{jobTitle}</Text>
          </Grid>
        </Grid>
        <Grid
          sx={{
            borderLeft: '2px solid red',
            px: 2,
            rowGap: 0,
          }}
        >
          <Text>date</Text>
          <Text>date</Text>
          <Text>date</Text>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpeakerCard;
