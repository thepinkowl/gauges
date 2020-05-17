import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Task, getTask, deleteTask, saveTask } from '../data/tasks';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import WeekSelector from '../components/week/WeekSelector';

interface TaskDetailProps extends RouteComponentProps<{ id: string; }> { }

const AtoZCol = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;

.actions {
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px;

  .remove {
    padding-top: 15px;
    text-align: center;
    color: var(--ion-color-danger);
    font-weight: bold;
  }
}
`;

const TaskDetail: React.FC<TaskDetailProps> = ({ match }) => {

  const [task, setTask] = useState<Task>();
  const [title, setTitle] = useState<string>('');
  const [when, setWhen] = useState<number[]>([]);
  const [lastExecution, setLastExecution] = useState<Date>(new Date());
  const [isFormValid, setIsFormValid] = useState<boolean>(true);
  const history = useHistory();

  useIonViewWillEnter(() => {
    const t: Task | undefined = getTask(parseInt(match.params.id, 10));
    if (t) {
      console.log(t);
      setTask(t);
      setTitle(t.title);
      setWhen(t.when);
      const exec = [...t.executions].sort((a, b) => b.getTime() - a.getTime())
      setLastExecution(exec[0]);
    }
  });

  const changeLastExecution = (date: string) => {
    setLastExecution(new Date(date));
  }

  const save = () => {
    if (!title || !title.length || !when || !when.length || !lastExecution) {
      setIsFormValid(false);
      return;
    }
    let executions = task ? [...task.executions].sort((a, b) => b.getTime() - a.getTime()) : [];
    executions[0] = lastExecution;
    saveTask({ ...task, title, when, executions } as Task);
    history.push("/tasks");
  }

  const remove = (task: Task) => {
    deleteTask(task);
    history.push("/tasks");
  }

  return (
    <IonPage id="task-detail-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Tasks" defaultHref="/tasks"></IonBackButton>
          </IonButtons>
          <IonTitle>{task ? 'Edit task' : 'New task'}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <AtoZCol>
          <div>
            <IonItem>
              <IonLabel position="stacked">Let's give it a name</IonLabel>
              <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">When do you usually do this task?</IonLabel>
              <WeekSelector when={when} onValueChange={data => setWhen(data)} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">When did you last do this?</IonLabel>
              <IonDatetime displayFormat="DDDD MMM D, YYYY"
                value={lastExecution?.toISOString()} onIonChange={e => changeLastExecution(e.detail.value!)}>
              </IonDatetime>
            </IonItem>
          </div>
          <div className="actions">
            <IonButton onClick={save} expand="block">{task ? 'Update' : 'Create'}</IonButton>
            {task && (<span className='remove' onClick={() => remove(task)}>Remove this task</span>)}
          </div>
        </AtoZCol>
        <IonToast
          isOpen={!isFormValid}
          onDidDismiss={() => setIsFormValid(true)}
          message="All fields are required."
          duration={1000}
        />
      </IonContent>
    </IonPage>
  );
};

export default TaskDetail;
