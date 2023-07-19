import Head from 'next/head';
import Login from '../components/Login';

const index = () => {
  return (
    <>
        <Head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.css" rel="stylesheet"></link>
        <link rel="favicon" href="/images/streamAlive-favicon.png" />
        <title>Todo App</title>
        </Head>
        <Login />
    </>
  )
}

export default index;