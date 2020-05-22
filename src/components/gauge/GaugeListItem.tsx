import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/react';
import * as H from 'history';
import { checkmarkDoneOutline } from 'ionicons/icons';
import React from 'react';
import styled from 'styled-components';
import { Task } from '../../data/tasks';
import GaugeContent from './GaugeContent';

const IonItemCustom = styled(IonItem)`
  --padding-start: 20px;
`;

interface IProps {
  task: Task;
  history: H.History;
}

interface IState {}

class GaugeListItem extends React.Component<IProps, IState> {

  private doneSliderRef: any;

  constructor(props: IProps) {
    super(props);
    this.doneSliderRef = React.createRef();
    this.markAsDone = this.markAsDone.bind(this);
    this.editGauge = this.editGauge.bind(this);
    this.deleteGauge = this.deleteGauge.bind(this);
    this.switchSlider = this.switchSlider.bind(this);
  }

  switchSlider(e: React.MouseEvent | React.TouchEvent) {
    console.log('switch', (new Date()));
    this.doneSliderRef.current.getOpenAmount().then(
      (amount: number) => {
        amount !== 0 ? this.closeSlider() : this.openSlider();
      }
    );
  }

  markAsDone(e: React.MouseEvent | React.TouchEvent | Event) {
    this.stopPropagation(e);
    console.log('done', (new Date()));
    this.closeSlider();
  }

  editGauge(e: React.MouseEvent | React.TouchEvent | Event) {
    this.stopPropagation(e);
    this.props.history.push(`/tasks/${this.props.task.id}`);
    this.closeSlider();
  }

  deleteGauge(e: React.MouseEvent | React.TouchEvent) {
    this.stopPropagation(e);
    console.log('delete', (new Date()));
    this.closeSlider();
  }

  render() {
    return (
      <IonItemSliding ref={this.doneSliderRef} onClick={this.switchSlider}>
        <IonItemOptions side="start" onIonSwipe={this.markAsDone}>
          <IonItemOption expandable color="success" onClick={this.markAsDone}>
            <IonIcon slot="start" icon={checkmarkDoneOutline}></IonIcon>I've just done it
          </IonItemOption>
        </IonItemOptions>

        <IonItemCustom>
          <GaugeContent task={this.props.task} />
        </IonItemCustom>

        <IonItemOptions side="end" onIonSwipe={this.editGauge}>
          <IonItemOption color="danger" onClick={this.deleteGauge}>Delete</IonItemOption>
          <IonItemOption expandable onClick={this.editGauge}>Edit</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    );
  }

  private closeSlider() {
    this.doneSliderRef && this.doneSliderRef.current.closeOpened();
  }

  private openSlider(left = true) {
    this.doneSliderRef && this.doneSliderRef.current.open(left ? "start" : "end");
  }

  private stopPropagation(e: React.MouseEvent | React.TouchEvent | Event) {
    e.stopPropagation();
  }

};

export default GaugeListItem;
