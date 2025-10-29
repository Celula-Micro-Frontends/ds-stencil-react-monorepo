import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Typography } from "./Typography";

const meta = {
  title: "Foundations/Typography",
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyDefault: Story = {
  parameters: { docsOnly: true },
};
