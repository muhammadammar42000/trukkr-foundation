import {
  Box,
  BoxProps,
  Card,
  Container,
  createStyles,
  Grid,
  Image,
  SimpleGrid,
  Stack,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import { TitleBadge } from "../../components";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  feature: {
    padding: theme.spacing.lg,
    backdropFilter: `blur(16px) saturate(180%)`,
    backgroundColor: `rgba(255, 255, 255, 0.75)`,
    border: `none`,

    "&:hover": {
      backgroundColor: theme.colors.secondary[2],
    },
  },
}));

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const WaysToFundSection = ({ boxProps, subtitleProps }: IProps) => {
  const { classes, cx, theme } = useStyles();

  return (
    <Box
      sx={{ background: theme.colors.secondary[8], color: theme.white }}
      {...boxProps}
    >
      <Container fluid p={36}>
        <Grid>
          <Grid.Col lg={4}>
            <Stack spacing="xs" justify="center" sx={{ height: "100%" }}>
              <TitleBadge title="Make your impact" />
              <Title order={3}>Empowering Our Trucking Heroes</Title>
              <Text>
                Enhance your impact through targeted initiatives designed to
                support the well-being of truckers and their families. Our
                specialized programs provide crucial aid and resources
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col lg={8}>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <Card
                className={cx(classes.feature, "card")}
                shadow="md"
                radius="sm"
                component={Link}
                to="#"
              >
                <Card.Section>
                  <Image src="https://i.ibb.co/3rvd46Q/5.jpg" />
                </Card.Section>
                <Text mt="md" align="center" {...subtitleProps}>
                  Training Programs
                </Text>
              </Card>
              <Card
                className={cx(classes.feature, "card")}
                shadow="md"
                radius="sm"
                component={Link}
                to="#"
              >
                <Card.Section>
                  <Image src="https://i.ibb.co/dbNtLC0/6.jpg" />
                </Card.Section>
                <Text mt="md" align="center" {...subtitleProps}>
                  Insurance Support
                </Text>
              </Card>
              <Card
                className={cx(classes.feature, "card")}
                shadow="md"
                radius="sm"
                component={Link}
                to="#"
              >
                <Card.Section>
                  <Image src="https://i.ibb.co/f2PC79y/7.jpg" />
                </Card.Section>
                <Text mt="md" align="center" {...subtitleProps}>
                  Emergency Aid
                </Text>
              </Card>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default WaysToFundSection;
