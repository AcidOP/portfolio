import DarkFavicon from './dark';
import LightFavicon from './light';

{/* https://www.logoshaper.co/ */ }
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
