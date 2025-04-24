import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Profile from './pages/Profile';

export const routes = [
  {
    path: '/',
    component: Dashboard,
    exact: true
  },
  {
    path: '/courses',
    component: Courses
  },
  {
    path: '/profile',
    component: Profile
  }
];
