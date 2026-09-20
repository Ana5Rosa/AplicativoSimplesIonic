import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import IonCardConfig from '../components/IonCard';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ana Claudia Pedrosa Rosa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCardConfig></IonCardConfig>
      </IonContent>
    </IonPage>
  );
};

export default Home;
