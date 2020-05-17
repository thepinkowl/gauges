import { IonContent, IonList, IonPage, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import GaugeListItem from '../components/GaugeListItem';
import MoodTitle from '../components/MoodTitle';
import { getTasks, Task } from '../data/tasks';

const Dashboard: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useIonViewWillEnter(() => {
    setTasks(getTasks());
  });

  useIonViewWillEnter(() => {
  });

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <MoodTitle name="Roger" status="well" />
        <IonList>
          {tasks.map(t => <GaugeListItem key={t.id} data={t.title} task={t} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
