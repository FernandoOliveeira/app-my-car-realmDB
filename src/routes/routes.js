import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DashboardRoutes from './dashboard.routes';

const Routes = createAppContainer(createSwitchNavigator({ DashboardRoutes }));

export default Routes;
