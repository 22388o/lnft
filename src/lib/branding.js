const BRANDING = {
  projectName: 'Mintalio',
  
  superUserName: 'mintalio',
  
  urls: {
    base: 'mintalio.com',
    www: 'www.mintalio.com',
    protocol: 'https://mintalio.com',
    external: {
      twitter: 'https://twitter.com/mintalio',
      telegram: 'https://t.me/mintalio',
      blog: 'https://blog.mintalio.com/',
    }
  },
  
  meta: {
    general: {
      og: {
        title: 'Mintalio',
        image: 'https://mintalio.com/branding/splash.png',
        url: 'https://mintalio.com/',
      },
      twitter: {
        card: 'summary_large_image',
        creator: '@mintalio',
        site: '@mintalio',
        title: 'Mintalio',
        image: 'https://mintalio.com/branding/splash.png',
      },
      logo: {
        header: {
          path: '/branding/logo-default.png',
          class: 'w-24 lg:w-28'
        },
        footer: {
          path: '/branding/logo-footer.jpg',
          class: 'w-24'
        }
      },
      colors: {
        primary: '#3C63C4',
        secondary: '#32373C',
      },
      homeHeroText: 'Upload, collect, and transact rare digital art on the Liquid Network'
    },
    // for art page we use art info in <header> meta
    artPage: (art) => ({
      og: {
        title: `Mintalio - ${art.title}`,
        image: `/api/ipfs/${art.filename}`,
        url: `https://mintalio.com/a/${art.slug}`,
      },
      twitter: {
        title: `Mintalio - ${art.title}`,
        image: `/api/ipfs/${art.filename}`,
      },
    })
    
  },
  
  emails: {
    support : 'support@mintalio.com'
  }
};

export default BRANDING;
