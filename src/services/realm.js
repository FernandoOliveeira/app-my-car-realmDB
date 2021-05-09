import Realm from 'realm';

import MaintenanceSchema from '~/schemas/MaintenanceSchema';

const getRealm = () => {
  return Realm.open({
    schema: [MaintenanceSchema],
  });
}

export default getRealm
