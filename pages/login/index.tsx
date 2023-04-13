import React, { useState } from 'react';
import { Button } from '@components/Button';
const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        value={email}
        onChange={(e: any) => setEmail(e.value)}
        style={{ border: '1px solid #000' }}
      />
      <input
        type="text"
        value={password}
        onChange={(e: any) => setPassword(e.value)}
        style={{ border: '1px solid #000' }}
      />
      <Button type="submit" variant="fill" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Login;
