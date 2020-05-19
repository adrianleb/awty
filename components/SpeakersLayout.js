import speakers from '../content/speakers';
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
import moment from 'moment';
import SpeakerCard from '../components/SpeakerCard';

const SpeakersLayout = ({}) => {
  const sorted = speakers
    .map((s) => {
      s.time = moment(s.time);
      s.date = s.time.format('MMM D');
      return s;
    })
    .sort((a, b) => a.time - b.time)
    .reduce((prev, next) => {
      const { time, date } = next;
      // const date = moment(time);
      // const key = date.format('MMM D');
      const arr = prev[date] || [];
      prev[date] = [...arr, next];
      return prev;
    }, {});

  return (
    <>
      {Object.keys(sorted).map((k) => {
        return (
          <Box
            sx={{
              py: 5,
              px: [4, 0],
            }}
          >
            <Heading
              variant="sub5"
              sx={{
                textAlign: 'center',
                marginBottom: '5',
              }}
            >
              {k}
            </Heading>
            <Grid columns={[1, 2]}>
              {sorted[k].map(({ title, name, photo, time, jobTitle }) => {
                return (
                  <SpeakerCard {...{ title, name, photo, time, jobTitle }} />
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </>
  );
};

export default SpeakersLayout;
