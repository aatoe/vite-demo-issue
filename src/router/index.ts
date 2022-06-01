import loadable from '@loadable/component';

export default [
  {
    path: '/home/123',
    exact: true,
    tabbarShow: true,
    component: loadable(() => import('@/pages/home'))
  },
  {
    path: '/about/123',
    exact: true,
    tabbarShow: true,
    component: loadable(() => import('@/pages/about'))
  }
];
