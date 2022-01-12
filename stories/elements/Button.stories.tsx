import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../src/elements/Button";
import InterfaceButton from "../../src/types/elements/Button";


export default {
  title: "Elements/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: InterfaceButton) => <Button {...args}>Button</Button>;

export const LoggedIn = Template.bind({});
