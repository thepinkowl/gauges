import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {
  IonAlert
} from '@ionic/react';
import { getUser, saveUser, User } from '../data/user';

const Title = styled.h1`
  width: 73%;
  max-width: 350px;
  font-family: var(--tpo-font-family);
  font-size: var(--tpo-font-big);
  font-weight: 700;
  line-height: 140%;
  margin: var(--tpo-margin);
  margin-top: 40px;
`;

const Name = styled.span`
  color: var(--ion-color-primary);
`

interface TitleProps {
  status: string;
}

const MoodTitle: React.FC<TitleProps> = ({ status }) => {
  const [askForName, setAskForName] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(getUser);
  }, []);

  return (
    <div>
      <Title>Hey <Name onClick={() => setAskForName(true)}>{user?.name || 'you'}</Name>, you're doing {status} today!</Title>
      <IonAlert isOpen={askForName}
      onDidDismiss={() => setAskForName(false)}
      header={'How should I call you?'}
      inputs={[
        {
          name: 'name',
          type: 'text',
          id: 'name1',
          value: user?.name,
          placeholder: 'Name'
        }
        ]} 
        
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary'
          },
          {
            text: 'Ok',
            handler: (e) => {
              setUser(e as User);
              saveUser(e as User)
            }
          }
        ]}
        />
    </div>
  );
};

export default MoodTitle;
