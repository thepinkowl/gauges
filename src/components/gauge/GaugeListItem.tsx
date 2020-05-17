import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import React from 'react';
import styled from 'styled-components';
import { Task } from '../../data/tasks';
import GaugeContent from './GaugeContent';

const IonItemCustom = styled(IonItem)`
  --padding-start: 20px;
`;

interface GaugeListItemProps {
  task: Task;
}

const GaugeListItem: React.FC<GaugeListItemProps> = ({ task }) => {
  return (
    <IonItemSliding>
      <IonItemOptions side="start">
        <IonItemOption color="success" onClick={() => console.log('done clicked')}>
          <IonIcon slot="start" icon={checkmarkDoneOutline}></IonIcon>I've just done it
        </IonItemOption>
      </IonItemOptions>

      <IonItemCustom>
        <GaugeContent task={task} />
      </IonItemCustom>

      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={() => console.log('delete clicked')}>Delete</IonItemOption>
        <IonItemOption onClick={() => console.log('edit clicked')}>Edit</IonItemOption>
      </IonItemOptions>
    </IonItemSliding >
  );
};

export default GaugeListItem;
