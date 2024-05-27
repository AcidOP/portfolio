const LightFavicon = () => {
  return (
    <>
      <link
        media='(prefers-color-scheme: light)'
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/light/apple-touch-icon.png'
      />
      <link
        media='(prefers-color-scheme: light)'
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/light/favicon-32x32.png'
      />
      <link
        media='(prefers-color-scheme: light)'
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/light/favicon-16x16.png'
      />
    </>
  );
};

export default LightFavicon;
