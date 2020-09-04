import React, { useState } from 'react';

import addToMailChimp from 'gatsby-plugin-mailchimp';
import Form from '../Form';
import Emoji from '../Emoji';

import schema from './schema';
import messages from './messages';

import * as S from './styled';

const Newsletter = () => {
  const [result, setResult] = useState('');
  const [sending, setSending] = useState(false);

  const getPathName = () => window.location.pathname;

  const subscribe = ({
    FNAME,
    email,
    pathname = getPathName()
  }) => addToMailChimp(email, { FNAME, pathname });

  const onSubmit = async (values) => {
    setSending(true);
    try {
      const { result } = await subscribe(values);
      setResult(result);
    } catch (err) {
      setResult('warning');
    }
    setSending(false);
  };

  const renderMessage = () => result && !sending && (
    <S.Message type={result}>
      {messages[result].text}
    </S.Message>
  );

  return (
    <>
      <S.Newsletter>
        <S.Title>
          <Emoji aria-label="mail" content="📩" /> Inscreva-se na Newsletter!
        </S.Title>
        <S.Text>
          Receba no seu e-mail sempre que sair um novo blog!
        </S.Text>
        <S.Form>
          <Form schema={schema} onSubmit={onSubmit} disabled={sending} />
        </S.Form>
        {renderMessage()}
      </S.Newsletter>
    </>
  );
};

export default Newsletter;