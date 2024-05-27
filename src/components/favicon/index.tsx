import DarkFavicon from './dark';
import LightFavicon from './light';

const Favicon = () => {
  return (
    <>
      <LightFavicon />
      <DarkFavicon />

      <link rel='manifest' href='/site.webmanifest' />
    </>
  );
};

export default Favicon;
