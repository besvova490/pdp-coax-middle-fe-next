import React from "react";


export interface InterfaceHowItWorks {
  icon: { url: string };
  description: React.ReactNode;
  title: React.ReactNode;
}

export interface InterfaceHomePageData {
  homePageTops: {
    image: { url: string };
    description: React.ReactNode;
    title: React.ReactNode;
  };
  howItWorks: Array<InterfaceHowItWorks>;
}

export interface InterfaceTopSection {
  image: string;
  description: React.ReactNode;
  title: React.ReactNode;
}
