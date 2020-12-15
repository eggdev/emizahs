import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
