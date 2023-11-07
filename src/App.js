// project import
import Routess from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Keycloak from 'keycloak-js';
import { dispatch } from 'store/index';
import { authenticate } from 'store/reducers/auth';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const keycloak = new Keycloak({
  url: 'http://localhost:8180/',
  realm: 'dicheck',
  clientId: 'public-client'
});

try {
  const authenticated = await keycloak.init({
    onLoad: 'check-sso'
  });
  dispatch(authenticate(keycloak));
  console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
} catch (error) {
  console.error('Failed to initialize adapter:', error);
}

console.log('outside');

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routess />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
