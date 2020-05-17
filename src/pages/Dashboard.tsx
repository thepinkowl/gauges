import React from 'react';
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

const Home: React.FC = () => {

  useIonViewWillEnter(() => {
  });

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>

        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonTitle>Hey you, you're doing well today!</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonList>
          {['test'].map(m => <GaugeListItem key={m} data={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
