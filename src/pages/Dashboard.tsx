import { IonContent, IonList, IonPage, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';
import GaugeListItem from '../components/gauge/GaugeListItem';
import MoodTitle from '../components/MoodTitle';
import { getTasks, Task } from '../data/tasks';

const NewTaskButton = styled.div`
  color: var(--ion-color-primary);
  text-align: center;
  padding: 10px 0;
`;

interface IProps extends RouteComponentProps<{}> {};

const Dashboard: React.FC<IProps> = ({history}) => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useIonViewWillEnter(() => {
    setTasks(getTasks());
  });

  useIonViewWillEnter(() => {
  });

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <MoodTitle status="well" />
        <IonList>
          {tasks.map(t => <GaugeListItem history={history} key={t.id} task={t} />)}
        </IonList>
        <NewTaskButton onClick={() => history.push('/tasks/new')}>Create a new repeating task</NewTaskButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
