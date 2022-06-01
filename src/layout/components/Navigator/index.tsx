import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './index.module.less';
import { NavigatorType } from '@router/index';

const Navigator: FC<NavigatorType> = (props) => {
  const { btnColor, title, background = 'transparent' } = props;
  console.log(btnColor, 'btnColor');

  const history = useHistory();
  const goBack = useCallback(() => {
    if (history.length === 1) {
      history.replace('/');
    } else {
      history.goBack();
    }
  }, []);

  return (
    <div style={{ background: background }} className={styles.navigator}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Navigator;
