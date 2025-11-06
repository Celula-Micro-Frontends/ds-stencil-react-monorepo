import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Spacing } from "./Spacing";

const meta = {
  title: "Foundations/Spacing",
  component: Spacing,
  tags: ["autodocs"],
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpacingDefault: Story = {
  parameters: { docsOnly: true },
};
