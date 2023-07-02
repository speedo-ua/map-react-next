import dynamic from 'next/dynamic';

const MapWithoutSSR = dynamic(() => import('./MapSSR'), {
    ssr: false,
  });

  export default function Map (){

      return <MapWithoutSSR/>
 
  }
