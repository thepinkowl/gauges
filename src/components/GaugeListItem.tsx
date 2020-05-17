import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';

interface MessageListItemProps {
  data: string;
}

const GaugeListItem: React.FC<MessageListItemProps> = ({ data }) => {
  return (
    <IonItem routerLink={`/message/${data}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {data}
          <span className="date">
            <IonNote>{data}</IonNote>
          </span>
        </h2>
        <h3>{data}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default GaugeListItem;
