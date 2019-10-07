import React from 'react';

import Title from '../components/indexPage/title';
import Part1 from '../components/indexPage/part1';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/indexPage/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title />
    <Part1 />
    <Contact />
  </Layout>
);

export default IndexPage;
