import {
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Overlay,
  rem,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconRocket } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import bannerTest from "../../assets/img/bannerTest.jpg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: `url(${bannerTest})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: rem(640),

    [theme.fn.smallerThan("md")]: {
      height: rem(560),
    },

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
    height: rem(640),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [theme.fn.smallerThan("md")]: {
      height: rem(560),
    },
  },

  title: {
    fontWeight: 900,
    fontSize: rem(50),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    textAlign: "center",

    [theme.fn.smallerThan("md")]: {
      fontSize: rem(48),
    },

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(28),
      textAlign: "left",
      fontWeight: 700,
      padding: 0,
    },
  },

  highlight: {
    color: theme.colors.gray[4],
  },

  description: {
    color: theme.white,
    fontSize: rem(24),
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },

  badge: {
    width: "fit-content",
    padding: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    backgroundImage: theme.fn.gradient({
      from: theme.colors.green[2],
      to: theme.colors.lime[6],
      deg: 20,
    }),
    fontWeight: 500,
  },
}));

const HeroSection = () => {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Container>
          <Stack spacing="xl">
            <Center>
              <Group spacing={4} className={classes.badge}>
                <IconRocket stroke={1.5} />
                <Text transform="uppercase">Make it Happen</Text>
              </Group>
            </Center>

            <Title className={classes.title}>
              A Non-Profit Organization{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{
                  from: theme.colors.lime[5],
                  to: theme.colors.green[4],
                }}
              >
                Dedicated to the Welfare
              </Text>{" "}
              of the Trucking Community{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{
                  from: theme.colors.green[4],
                  to: theme.colors.lime[5],
                }}
              >
                and Their Families
              </Text>
            </Title>
            <Text size="lg" className={classes.description}>
              Driving support for every mile, ensuring smiles for our road
              warriors and their loved ones.
            </Text>
          </Stack>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            component={Link}
            // to="/create-campaign"
            to="#"
          >
            Donate Now
          </Button>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            component={Link}
            // to="/campaigns"
            to="#"

          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
