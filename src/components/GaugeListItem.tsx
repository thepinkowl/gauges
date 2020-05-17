import React from 'react';
import { Task } from '../data/tasks';
import {
  IonItem,
  IonLabel,
  IonNote,
  IonIcon,
  IonItemOption,
  IonItemSliding,
  IonItemOptions
} from '@ionic/react';
import { happy } from 'ionicons/icons';
import WeekDisplay from './WeekDisplay';
import styled from 'styled-components';

const IonItemCustom = styled(IonItem)`
  --padding-start: 20px;
`;

interface GaugeListItemProps {
  data: string;
  task?: Task;
}

const GaugeListItem: React.FC<GaugeListItemProps> = ({ data, task }) => {
  return (
    <IonItemSliding>
      <IonItemOptions side="start">
        <IonItemOption onClick={() => console.log('favorite clicked')}>
          <IonIcon slot="start" icon={happy}></IonIcon>Favorite
        </IonItemOption>
        <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Share</IonItemOption>
      </IonItemOptions>

      <IonItemCustom>
        <IonLabel>{data}</IonLabel>
        <IonNote slot="end">
          <WeekDisplay value={task?.when} />
        </IonNote>
      </IonItemCustom>

      <IonItemOptions side="end">
        <IonItemOption onClick={() => console.log('unread clicked')}>Unread</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default GaugeListItem;
