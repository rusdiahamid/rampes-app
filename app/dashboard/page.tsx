'use client';

import getCurrentUser from '@/app/actions/getCurrentUser';

const Dashboard = () => {
  const currentUser = getCurrentUser();
  console.log(currentUser);
  return <h1>Hello</h1>;
};

export default Dashboard;
