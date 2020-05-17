import React, { useState } from 'react';
import { Task, getTasks } from '../data/tasks';
import {
  IonContent,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonHeader
} from '@ionic/react';
import GaugeListItem from '../components/GaugeListItem';
import MoodTitle from '../components/MoodTitle';
import './Dashboard.scss';

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
          {['test'].map(m => <GaugeListItem key={m} data={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
