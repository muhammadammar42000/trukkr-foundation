import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Flex,
  Image,
  Progress,
  Stack,
  Text,
  TextProps,
  ThemeIcon,
  TitleProps,
} from "@mantine/core";
import { IconUsers, IconWorld } from "@tabler/icons-react";
import { TitleBadge } from "../../components";
import { useMediaQuery } from "@mantine/hooks";

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const JoinUsSection = ({ boxProps, subtitleProps }: IProps) => {
  const matchesMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box {...boxProps}>
      <Flex
        gap={{ base: "sm", sm: "lg" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack>
          <TitleBadge title="Partnerships for Progress" />
          <Text {...subtitleProps}>
            Start your journey with us. Together, we can make a lasting impact
            on the lives of those who keep our economy moving.
          </Text>
          <Flex gap="xs">
            <ThemeIcon size="xl" color="secondary" variant="filled">
              <IconWorld />
            </ThemeIcon>
            <Stack spacing={2}>
              <Text weight={600}>Collaborate with Us</Text>
              <Text size="sm">
                Partner with a non-profit dedicated to the welfare of trucking
                families.
              </Text>
            </Stack>
          </Flex>
          <Flex gap="xs">
            <ThemeIcon size="xl" color="secondary" variant="filled">
              <IconUsers />
            </ThemeIcon>
            <Stack spacing={2}>
              <Text weight={600}>Expand Your Impact</Text>
              <Text size="sm">
                Extend your reach within the trucking community through targeted
                support and shared initiatives.
              </Text>
            </Stack>
          </Flex>
          {/* <Avatar.Group spacing="sm">
            <Avatar
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              radius="xl"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              radius="xl"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              radius="xl"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              radius="xl"
            />
            <Avatar radius="xl">+5</Avatar>
          </Avatar.Group> */}
          {/* <Progress value={50} /> */}
          {/* <Button>Join Our Network</Button> */}
        </Stack>
        <Box mx={matchesMobile ? 0 : "auto"}>
          <Image
            src="/progress.jpeg"
            width={matchesMobile ? "100%" : 500}
            height={400}
            radius="sm"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default JoinUsSection;
