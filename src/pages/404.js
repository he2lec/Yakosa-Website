import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled('div')`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Text = styled('span')`
  ${tw`text-black text-center`};
`;

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`no-underline`}
`;

const AbsoluteLink = styled('span')`
  ${tw`absolute top-0 w-32 text-center font-normal border transition-all
    transition-100 transition-linear rounded`}
  & > * {
    ${tw`text-black transition-all transition-100 transition-linear`}
  }
  &:hover > * {
    ${tw`text-white transition-all transition-100 transition-linear`}
  }
  &:hover {
    ${tw`bg-black transition-all transition-100 transition-linear`}
  }
  top: 15px;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <AbsoluteLink>
        <StyledLink to="/">Fly to Home</StyledLink>
      </AbsoluteLink>
      <Text>
        <h1>Absolute &lt;void&gt;</h1>
      </Text>
    </Container>
  </Layout>
);

export default NotFoundPage;
