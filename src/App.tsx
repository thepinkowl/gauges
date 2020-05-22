import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, getConfig, iosTransitionAnimation, setupConfig, isPlatform } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TaskDetail from './pages/TaskDetail';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// animation={iosTransitionAnimation} 
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet mode="ios">
        <Route path="/tasks" component={Dashboard} exact={true} />
        <Route path="/tasks/:id" component={TaskDetail} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/tasks" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

setupConfig({ swipeBackEnabled: false });

export default App;
