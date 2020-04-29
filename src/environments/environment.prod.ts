import {
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';

export const environment = {
  production: true,
  server: {
    BASE_URL: 'https://YOUR-BACKEND-DOMAIN.com',
    API_VERSION: 'api'
  },
  STRIPE_PUB_KEY: 'PUBLISHABLE STRIPE KEY',
  AUTH_CONFIG: new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        'GOOGLE LOGIN STRING'
      )
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('FACEBOOK LOGIN STRING')
    }
  ]),
  piwikServer: 'CUSTOM MATOMO ANALYTICS STRING'
};
