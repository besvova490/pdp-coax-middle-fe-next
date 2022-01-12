import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ChatComponent from "../../src/components/ChatComponent";
import ChatComponentInterface from "../../src/types/components/ChatComponent";


export default {
  title: "Components/SimpleChat",
  component: ChatComponent,
} as ComponentMeta<typeof ChatComponent>;

const Template: ComponentStory<typeof ChatComponent> = (args: ChatComponentInterface) => <ChatComponent {...args}/>;

export const ChatComponentSimple = Template.bind({});
