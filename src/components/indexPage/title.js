import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div`
  text-align: center;
`;

const OuterContainer = styled.div`
  ${tw`text-black pt-16`}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Description = styled.p`
  ${tw`text-white text-4xl font-light`}
  padding: 0;
  margin-bottom: 1rem;
`;

const Bold = styled.span`
  ${tw`font-bold`}
`;

const NameHeader = styled.h1`
  ${tw`text-white uppercase`}
  text-shadow: 1px 1px 1px rgba(0,0,0,1);
  font-size: 8rem;
  margin-bottom: 0;
`;

const Title = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>
            Shop <Bold>more</Bold>, Pay <Bold>less</Bold>
          </Description>
        </Container>
      </OuterContainer>
    )}
  />
);

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
};

NameHeader.defaultProps = {
  siteTitle: ``,
};

export default Title;
