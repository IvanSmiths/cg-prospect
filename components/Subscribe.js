import React, { useRef, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

function Subscribe() {
  let { t } = useTranslation();
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage(`${t('common:mail-desc-success')}`);
  };

  return (
    <form className="form-newsletter" onSubmit={subscribe}>
      <label htmlFor="email-input">{'Your Email  '}</label>
      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEl}
        required
        type="email"
      />
      <div>
        <p className="small-font highlight">
          {message ? message : `${t('common:mail-desc')}`}
        </p>
      </div>
      <button className="btn" type="submit">
        {t('common:mail-btn')}
      </button>
    </form>
  );
}

export default Subscribe;
