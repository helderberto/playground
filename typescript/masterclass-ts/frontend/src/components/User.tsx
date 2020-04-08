import React from 'react';

interface IUser {
  name: string;
  email?: string; // Optional field
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user, children }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name} <br />
      <strong>E-mail: </strong> {user.email || 'Não possui e-mail'} <br />
      {children}
    </div>
  );
};

export default User;
