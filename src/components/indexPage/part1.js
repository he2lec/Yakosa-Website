import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Container = styled.div`
  ${tw`relative mt-32`}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const AbsoluteImage = styled.div`
  transform: rotate(-10deg);
`;

const Description = styled.div`
  ${tw`text-3xl font-light`}
  line-height: 50px;
  margin-right: 150px;
`;

const Bold = styled.span`
  ${tw`font-bold`}
`;

const Tooltip = styled.span`
  ${tw`bg-black text-white absolute text-base text-center invisible z-10 rounded-lg`}
  width: 300px;
  padding: 5px 0;
  top: 110%;
  left: 50%;
  margin-left: -150px;
`;

const Button = styled.button`
  ${tw`bg-white text-gray-800 font-light py-1 px-8 border
    border-gray-400 rounded shadow block mt-8 hover:bg-gray-200 relative`}
  &:hover > ${Tooltip} {
    ${tw`visible`}
  }
`;

const Iphone = () => (
  <AbsoluteImage>
    <img src="./iphone.png" alt="" />
  </AbsoluteImage>
);

const Part1 = () => (
  <>
    <Container>
      <Description>
        Shopping is <Bold>expensive</Bold>? <br />
        Tired of looking for <Bold>promotions</Bold>?
        <Button>
          Go for <Bold>YAKOSA</Bold>!
          <Tooltip>
            Coming soon on <Bold>IOS</Bold> and <Bold>Android</Bold>
          </Tooltip>
        </Button>
      </Description>
      <Iphone />
    </Container>
  </>
);

export default Part1;
