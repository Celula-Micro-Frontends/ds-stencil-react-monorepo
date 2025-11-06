import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Palette } from "./Palette";

const meta = {
  title: "Foundations/Colors",
  component: Palette,
  tags: ["autodocs"],
} satisfies Meta<typeof Palette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorsDefault: Story = {
  parameters: { docsOnly: true },
};
