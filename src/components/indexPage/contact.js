import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Container = styled.div`
  ${tw`relative mt-32`}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  ${tw`max-w-lg rounded overflow-hidden shadow-lg bg-white text-black`}
  min-width: 600px;
`;

const Submit = styled.button`
  ${tw`bg-transparent hover:bg-pink-700 text-pink-700 font-semibold
    hover:text-white py-2 px-4 border border-pink-700 hover:border-transparent
    rounded`}
  margin-top: 15px;
`;

const Contact = () => (
  <>
    <Container>
      <Card>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 uppercase">
            Be the first to get the app
          </div>
        </div>
        <div class="px-6 py-4 text-right">
        <form name="subscribe" method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <input type="hidden" name="form-name" value="subscribe" />
          <input
            class="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="email@provider.xx"
          ></input>
          <Submit type="submit">Suscribe</Submit>
          </form>
        </div>
      </Card>
    </Container>
  </>
);

export default Contact;
