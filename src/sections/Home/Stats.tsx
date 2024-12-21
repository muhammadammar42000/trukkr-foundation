import {
  Box,
  BoxProps,
  Paper,
  PaperProps,
  SimpleGrid,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import { TitleBadge } from "../../components";

const mockData = [
  {
    amount: "500K",
    description: "Dollars raised for trucking family welfare programs",
  },
  {
    amount: "15K",
    description: "Truckers and family members directly supported.",
  },
  {
    amount: "700",
    description: "Educational and training scholarships granted.",
  },
];

interface IStatsProps extends PaperProps {
  amount: string;
  description: string;
}

function Stats({ amount, description }: IStatsProps) {
  return (
    <Paper
      p="md"
      shadow="md"
      radius="sm"
      sx={{
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
        border: `1px solid rgba(209, 213, 219, 0.3)`,
      }}
    >
      <Title size={36} mb="md">
        {amount}+
      </Title>
      <Text size="sm">{description}</Text>
    </Paper>
  );
}

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const StatsSection = ({ boxProps, subtitleProps, titleProps }: IProps) => {
  const items = mockData.map((item) => (
    <Stats {...item} key={item.description} />
  ));

  return (
    <Box {...boxProps}>
      <Box mb="lg">
        <TitleBadge title="Every Contribution Counts" />
        <Title {...titleProps}>Join our dedicated network</Title>
        <Text {...subtitleProps}>
          of supporters helping to secure a brighter future for truckers and
          their families. Your contributions drive essential programs and
          services directly impacting the trucking community.
        </Text>
      </Box>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {items}
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;
