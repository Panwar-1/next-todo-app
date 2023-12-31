import Head from 'next/head';
import Login from '../components/Login';
import { useAuth } from '../context/AuthContext';
import UserDashBoard from '../components/UserDashBoard';

const index = () => {
     const {currentUser} = useAuth();
      console.log('currentUser', currentUser);

  return (
    <>
        <Head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.css" rel="stylesheet"></link>
        <link rel="favicon" href="/images/streamAlive-favicon.png" />
        <title>Todo App</title>
        </Head>
        {!currentUser &&  <Login />}
        {currentUser && <UserDashBoard />}
       
    </>
  )
}

export default index;