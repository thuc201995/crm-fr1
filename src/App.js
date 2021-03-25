import { STATE_LOGIN } from 'components/AuthForm';
import {
  EmptyLayout,
  LayoutRoute,
  MainLayout,
  PrivateRoute,
} from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const AlertPage = React.lazy(() => import('pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const CardPage = React.lazy(() => import('pages/CardPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const TablePage = React.lazy(() => import('pages/TablePage'));
const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));
const AdminManagerPage = React.lazy(() => import('pages/AdminManagerPage'));
const UserManagerPage = React.lazy(() => import('pages/UserManagerPage'));
const SubjectManagerPage = React.lazy(() => import('pages/SubjectManagerPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <Switch>
          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={props => <AuthPage {...props} authState={STATE_LOGIN} />}
          />
          <LayoutRoute
            exact
            path="/admin"
            layout={EmptyLayout}
            component={props => <AuthPage {...props} authState={STATE_LOGIN} />}
          />

          <MainLayout breakpoint={this.props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <PrivateRoute exact path="/" component={DashboardPage} />
              <PrivateRoute
                exact
                path="/login-modal"
                component={AuthModalPage}
              />
              <PrivateRoute exact path="/buttons" component={ButtonPage} />
              <PrivateRoute exact path="/cards" component={CardPage} />
              <PrivateRoute exact path="/widgets" component={WidgetPage} />
              <PrivateRoute
                exact
                path="/typography"
                component={TypographyPage}
              />
              <PrivateRoute exact path="/alerts" component={AlertPage} />
              <PrivateRoute exact path="/tables" component={TablePage} />
              <PrivateRoute exact path="/badges" component={BadgePage} />
              <PrivateRoute
                exact
                path="/button-groups"
                component={ButtonGroupPage}
              />
              <PrivateRoute exact path="/dropdowns" component={DropdownPage} />
              <PrivateRoute exact path="/progress" component={ProgressPage} />
              <PrivateRoute exact path="/modals" component={ModalPage} />
              <PrivateRoute exact path="/forms" component={FormPage} />
              <PrivateRoute
                exact
                path="/input-groups"
                component={InputGroupPage}
              />
              <PrivateRoute
                exact
                path="/admin-manager"
                component={AdminManagerPage}
              />
              <PrivateRoute
                exact
                path="/user-manager"
                component={UserManagerPage}
              />
              <PrivateRoute
                exact
                path="/subject-manager"
                component={SubjectManagerPage}
              />

              <PrivateRoute exact path="/charts" component={ChartPage} />
            </React.Suspense>
          </MainLayout>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
