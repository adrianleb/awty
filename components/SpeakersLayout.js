import { useMemo } from 'react';
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
  // const [sorted, setSorted] = useState(null);

  // const now = useMemo(() => moment('2020-06-01T18:40+02:00'));
  const now = useMemo(() => moment());

  const sorted = useMemo(
    () =>
      speakers
        .map((s) => {
          s.timeOriginal = s.time;
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
        }, {}),
    [speakers]
  );

  return (
    <Box key={now}>
      {Object.keys(sorted).map((k) => {
        return (
          <Box
            key={`section_${k}`}
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
                color: 'accent',
              }}
            >
              {k}
            </Heading>
            <Grid
              columns={[1, 1, 2]}
              sx={{
                justifyContent: 'center',
                px: [0, 5, 0],
              }}
            >
              {sorted[k].map(({ title, time, speakers, timeOriginal }) => {
                const duration = 20;

                const isPast = now.isSameOrAfter(time);
                const isNow =
                  now.isSameOrAfter(time) &&
                  now.isSameOrBefore(time.add(20, 'minutes'));
                console.log(now, isPast, isNow);
                return (
                  <SpeakerCard
                    key={timeOriginal}
                    key={`${title}_${time}_card`}
                    {...{ title, speakers, time, isPast, isNow }}
                  />
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default SpeakersLayout;
