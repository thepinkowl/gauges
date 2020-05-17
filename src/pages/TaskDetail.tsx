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
              <IonInput />
            </IonItem>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {task.title}
                  <span className="date">
                    <IonNote>{task.when}</IonNote>
                  </span>
                </h2>
                <h3>To: <IonNote>Me</IonNote></h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{task.id}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </>
        ) : <div>Task not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default TaskDetail;
