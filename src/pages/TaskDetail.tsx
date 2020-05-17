import React, { useState } from 'react';
import { Task, getTask } from '../data/tasks';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import WeekSelector from '../components/week/WeekSelector';

interface TaskDetailProps extends RouteComponentProps<{ id: string; }> { }

const TaskDetail: React.FC<TaskDetailProps> = ({ match }) => {

  const [task, setTask] = useState<Task>();

  useIonViewWillEnter(() => {
    const t = getTask(parseInt(match.params.id, 10));
    setTask(t);
  });

  return (
    <IonPage id="task-detail-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Tasks" defaultHref="/tasks"></IonBackButton>
          </IonButtons>
          <IonTitle>Edit task</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {task ? (
          <>
            <IonItem>
              <IonLabel position="floating">Let's give it a name</IonLabel>
              <IonInput value={task.title} />
            </IonItem>
            <IonItem>
              <IonLabel>When do you usually do this task?</IonLabel>
              <WeekSelector when={task.when} onValueChange={(d) => console.log(d)} />
            </IonItem>
          </>
        ) : <div>Task not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default TaskDetail;
