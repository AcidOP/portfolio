const DarkFavicon = () => {
  return (
    <>
      <link
        media='(prefers-color-scheme: dark)'
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/dark/apple-touch-icon.png'
      />
      <link
        media='(prefers-color-scheme: dark)'
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/dark/favicon-32x32.png'
      />
      <link
        media='(prefers-color-scheme: dark)'
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/dark/favicon-16x16.png'
      />
    </>
  );
};

export default DarkFavicon;
