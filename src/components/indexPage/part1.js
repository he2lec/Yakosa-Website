import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Container = styled.div`
  ${tw`relative`}
`;

const AbsoluteImage = styled.div`
  ${tw`absolute top-0`}
  right: 100px;
  transform: rotate(-10deg);
`;

const AppName = styled.p`
  ${tw`absolute text-3xl font-bold`}
  top: 75px;
  left: 50px;
`;

const Description = styled.p`
  ${tw`text-3xl font-light`}
  margin-top: 200px;
  margin-right: 600px;
  float: right;
  line-height: 50px;
`;

const Bold = styled.span`
  ${tw`font-bold`}
`;

const Button = styled.button`
  ${tw`bg-white hover:bg-gray-100 text-gray-800 font-light py-1 px-8 border
    border-gray-400 rounded shadow block cursor-default mt-8`}
`;

const Iphone = () => (
  <Container>
    <AbsoluteImage>
      <img src="./iphone.png" alt="" />
      <AppName>Home Page</AppName>
    </AbsoluteImage>
  </Container>
);

const Part1 = () => (
  <>
    <Iphone />
    <Description>
      Shopping is <Bold>expensive</Bold>? <br />
      Tired of looking for <Bold>promotions</Bold>?
      <Button>
        Go for <Bold>YAKOSA</Bold>!
      </Button>
    </Description>
  </>
);

export default Part1;
