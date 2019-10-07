import React from 'react';

import Title from '../components/indexPage/title';
import Part1 from '../components/indexPage/part1';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title />
    <Part1 />
  </Layout>
);

export default IndexPage;
