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
          <Emoji aria-label="mailbox" content="📬" /> Assine a Newsletter!
        </S.Title>
        <S.Text>
          Assim você recebe por email as novidades :)
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