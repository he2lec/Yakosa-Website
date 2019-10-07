/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import './layout.css';

const Content = styled.div`
  ${tw`text-white`}
  margin: 0 auto;
  padding-top: 0;
`;

const Footer = styled.footer`
  ${tw`text-white p-6 text-2xl mt-16`}
  font-family: 'La Belle Aurore', 'Roboto', 'Avenir', 'Helvetica', 'sans-serif';
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Content>
          <main>{children}</main>
        </Content>
        <Footer>
          Made with
          <span role="img" className="ml-2 mr-2" aria-label="Love">
            ❤️
          </span>
          by Yakosa Team
        </Footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
