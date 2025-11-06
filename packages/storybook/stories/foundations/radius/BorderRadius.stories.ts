import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { BorderRadius } from "./BorderRadius";

const meta = {
  title: "Foundations/Radius",
  component: BorderRadius,
  tags: ["autodocs"],
} satisfies Meta<typeof BorderRadius>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderRadiusDefault: Story = {
  parameters: { docsOnly: true },
};
