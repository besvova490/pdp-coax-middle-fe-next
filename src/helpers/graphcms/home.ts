import { gql } from "@apollo/client";


const home = {
  getHomePageData: gql `
    query HomePageData {
      howItWorksPlural {
        title
        icon {
          url
        }
        description
      }
      homePageTops {
        title
        description
        image {
          url
        }
      }
    }
  `,
};

export default home;
