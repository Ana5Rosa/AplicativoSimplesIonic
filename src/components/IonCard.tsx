import React from 'react';
import './IonCard.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const IonCardConfig: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
      <div className="card-image-container">
        <img alt="Ana Claudia com Bruno Henrique no colo" src="public\foto1.jpg" />
      </div>
      <IonCardHeader>
        <IonCardTitle>Ana e Bruno</IonCardTitle>
        <IonCardSubtitle>Ana e Bruno</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <p>
          Uma mulher encontra-se sentada numa poltrona de tecido bege claro, com as pernas cruzadas, a segurar ao colo uma criança pequena que dorme encostada ao seu peito.
        </p>

        <ul>
          <li>
            <strong>Mulher:</strong> Tem o cabelo escuro apanhado para trás e veste uma camisa preta de manga curta com padrões florais claros sobre uns calções de ganga azuis. Usa um relógio inteligente no pulso esquerdo e segura um telemóvel com capa azul clara na mão direita. Na perna direita visível, destacam-se três tatuagens em traço preto: uma flor no tornozelo, a cabeça de um cão na canela e um desenho botânico/linha acima do joelho.
          </li>
          <li>
            <strong>Criança:</strong> Veste uma camisa polo vermelha de manga curta e uns calções claros, encontrando-se descalça e com a cabeça apoiada no ombro da mulher, num momento de descanso.
          </li>
          <li>
            <strong>Ambiente:</strong> A cena decorre num interior iluminado por luz natural indireta, junto a uma cortina e a um sofá castanho, com piso em mosaicos claros.
          </li>
        </ul>
      </IonCardContent>
    </IonCard>
  );
};

export default IonCardConfig;
