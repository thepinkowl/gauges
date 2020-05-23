import { IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { Task } from '../../data/tasks';
import WeekDisplay from '../week/WeekDisplay';
import GaugeBar from './GaugeBar';

const Row = styled(IonRow)`
  display: flex;
  justify-content: space-between;
`;

const GaugeTitle = styled.div`
  font-size: 1.1em;
  font-weight: 700;
`;

const GaugeSubText = styled.div`
  color: #828282;
  font-size: 1em;
`;

interface GaugeContentProps {
  task: Task;
}

const GaugeContent: React.FC<GaugeContentProps> = ({ task }) => {
  return (
    <IonGrid>
      <Row>
        <GaugeTitle>{task.title}</GaugeTitle>
        <WeekDisplay value={task.when} />
      </Row>
      <IonRow>
        <GaugeSubText>Last done two days ago</GaugeSubText>
      </IonRow>
      <IonRow>
        <GaugeBar percentage={70} />
      </IonRow>
    </IonGrid>
  );
};

export default GaugeContent;
