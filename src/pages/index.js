import React from 'react';

import Title from '../components/indexPage/title';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title />
  </Layout>
);

export default IndexPage;
