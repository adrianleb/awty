import sessions from '../content/sessions';
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
  Link,
  Grid,
  Button,
  IconButton,
} from 'theme-ui';
import NLink from 'next/link';
import moment from 'moment';
import SpeakerCard from './SpeakerCard';

const SessionsLayout = ({}) => {
  // const sorted = sessions
  //   .map((s) => {
  //     s.time = moment(s.time);
  //     s.date = s.time.format('MMM D');
  //     return s;
  //   })
  //   .sort((a, b) => a.time - b.time)
  //   .reduce((prev, next) => {
  //     const { time, date } = next;
  //     // const date = moment(time);
  //     // const key = date.format('MMM D');
  //     const arr = prev[date] || [];
  //     prev[date] = [...arr, next];
  //     return prev;
  //   }, {});
  const first = sessions[0];
  return (
    <Box
      sx={{
        pb: 6,
      }}
    >
      <Grid columns={[0, 2]} sx={{}}>
        <NLink passHref href={`/sessions/${1}`}>
          <Link
            sx={{
              textDecoration: 'none',
            }}
          >
            <Image
              sx={{
                width: '100%',
              }}
              src="http://placekitten.com/500/400"
            />
          </Link>
        </NLink>

        <NLink passHref href={`/sessions/${1}`}>
          <Link
            sx={{
              textDecoration: 'none',
            }}
          >
            <Grid
              sx={{
                rowGap: 3,
              }}
            >
              <Heading
                variant="simpleSub4"
                sx={
                  {
                    // marginBottom: '5',
                  }
                }
              >
                {first.title}
              </Heading>
              {first.speakers.map(({ name, jobTitle }) => {
                return (
                  <Text variant="simpleSub3">
                    {' '}
                    {name}, {jobTitle}
                  </Text>
                );
              })}
              <Text>{first.description}</Text>
            </Grid>
          </Link>
        </NLink>
      </Grid>

      <Grid
        columns={[1, 3]}
        sx={{
          columnGap: 5,
          pt: 6,
        }}
      >
        {sessions.map((k, i) => {
          return (
            <Grid
              key={`section_${k}`}
              sx={{
                // py: 5,
                px: [4, 0],
              }}
            >
              <NLink passHref href={`/sessions/${1}`}>
                <Link
                  sx={{
                    textDecoration: 'none',
                  }}
                >
                  <Grid
                    sx={{
                      rowGap: 2,
                    }}
                  >
                    <Image
                      sx={{
                        width: '100%',
                      }}
                      src={`http://placekitten.com/${400 + i * 10}/${
                        300 + i * 10
                      }`}
                    />

                    <Heading variant="sub4" sx={{ pt: 3 }}>
                      {k.title}
                    </Heading>
                    {k.speakers.map(({ name, jobTitle }) => {
                      return (
                        <Text variant="boldedP">
                          {' '}
                          {name}, {jobTitle}
                        </Text>
                      );
                    })}
                    <Text>{first.description}</Text>
                  </Grid>
                </Link>
              </NLink>
              <Grid
                columns={[1, 1, 2]}
                sx={{
                  justifyContent: 'center',
                  px: [0, 5, 0],
                }}
              >
                {/* {sorted[k].map(({ title, time, speakers }) => {
                return (
                  <SpeakerCard
                    key={`${title}_${time}_card`}
                    {...{ title, speakers, time }}
                  />
                );
              })} */}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SessionsLayout;
