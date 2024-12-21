import {
  Box,
  BoxProps,
  Button,
  Card,
  createStyles,
  Image,
  PaperProps,
  SimpleGrid,
  Stack,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import { TitleBadge } from "../../components";

const useStyles = createStyles((theme) => ({
  feature: {
    padding: theme.spacing.lg,
    backdropFilter: `blur(16px) saturate(180%)`,
    backgroundColor: `rgba(255, 255, 255, 0.75)`,
    border: `1px solid rgba(209, 213, 219, 0.3)`,
  },
}));

interface FeatureProps extends PaperProps {
  image: string;
  title: string;
  description: string;
  action: string;
}

const mockdata = [
  {
    image: "https://i.ibb.co/fnCDKqP/4.jpg",
    title: "Community Support",
    description:
      "Strengthening bonds within the trucking community through outreach, events, and peer support networks.",
    action: `Check out what's on`,
  },
  {
    image: "https://i.ibb.co/PZ7yW6T/2.jpg",
    title: "Education and Training",
    description: `Providing career advancement opportunities through professional training and scholarships for truckers and their children.`,
    action: "Learn more about upcoming programs and opportunities",
  },
  {
    image: "https://i.ibb.co/3Syrc5M/3.jpg",
    title: "Health and Wellbeing",
    description:
      "Ensuring access to health services and psychological support tailored to the unique needs of truckers.",
    action: "See crowdfunding options",
  },
  {
    image: "https://i.ibb.co/fChjt4j/1.jpg",
    title: "Emergency Aid",
    description:
      "Offering immediate assistance for families in crisis, ensuring no one is left behind on the road of life.",
    action: "Find out how we can work together ",
  },
];

function Feature({ image, title, description, action }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.feature, "card")} shadow="md" radius="sm">
      <Card.Section>
        <Image src={image} height={240} fit="cover" />
      </Card.Section>
      <Stack spacing="sm" mt="md">
        <Title order={4}>{title}</Title>
        <Text size="sm">{description}</Text>
        <Button variant="subtle" color="secondary">
          {action}
        </Button>
      </Stack>
    </Card>
  );
}

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const FeaturesSection = ({ boxProps, subtitleProps }: IProps) => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Box {...boxProps}>
      <Box mb="lg">
        <TitleBadge title="Our Impact on the Road" />
        <Text {...subtitleProps}>
          Focused on the heart of America's economy, we offer tailored support
          programs that make tangible differences in the lives of our truckers
          and their families.
        </Text>
      </Box>
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[{ maxWidth: "md", cols: 2, spacing: "sm" }]}
      >
        {items}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesSection;
