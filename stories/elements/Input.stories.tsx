import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../../src/elements/Input";
import InterfaceInput from "src/types/elements/Input";


export default {
  title: "Elements/Input",
  component: Input,
  argTypes: {
    error: { control: { type: "text" } },
    label: { control: { type: "text" } }
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InterfaceInput) => <Input { ...args }/>;

export const SimpleInput = Template.bind({});
