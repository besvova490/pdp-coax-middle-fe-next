import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SideBarMenu from "../../src/components/SideBarMenu";

export default {
  title: "Components/SideBarMenu",
  component: SideBarMenu,
} as ComponentMeta<typeof SideBarMenu>;

const Template: ComponentStory<typeof SideBarMenu> = () => <SideBarMenu/>;

export const SideBarMenuSimple = Template.bind({});
