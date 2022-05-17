// components
import HowItWorks from "src/containers/Home/HowItWorks";
import TopSection from "src/containers/Home/TopSection";
import ContactUs from "src/containers/ContactUs";

// layout
import AuthLayout from "src/layouts/AuthLayout";

// helpers
import home from "src/helpers/graphcms/home";
import apolloClient from "src/helpers/apolloClient";

// types
import { InterfaceHomePageData } from "src/types/pages/Home";


function Home({ homePageTops, howItWorks }: InterfaceHomePageData) {


  return (
    <AuthLayout>
      <TopSection
        image={homePageTops.image.url}
        title={homePageTops.title}
        description={homePageTops.description}
      />
      <HowItWorks items={howItWorks}/>
      <ContactUs/>
    </AuthLayout>
  );
}

export const getStaticProps = async () => {
  const resp = await apolloClient.query<any>({
    query: home.getHomePageData,
  }).catch(() => null);


  return {
    props: {
      homePageTops: resp?.data.homePageTops[0],
      howItWorks: resp?.data.howItWorksPlural,
    }
  };
}

export default Home
