import { TabBar } from 'antd-mobile';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './index.module.less';

function Navigator(): JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <i className='iconfont'>&#xe63b;</i>
    },
    {
      key: '/combatMap',
      title: '作战地图',
      icon: <i className='iconfont'>&#xe64b;</i>
    },
    {
      key: '/titokList',
      title: '榜单',
      icon: <i className='iconfont'>&#xe63a;</i>
    }
  ];
  const handleChange = (e: string) => {
    history.push(e);
  };
  return (
    <div className={styles.navigator}>
      {/* {pathname === '/home' ? '/home/myHome' : pathname}  */}
      <TabBar activeKey={pathname} onChange={handleChange}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}

export default Navigator;
