export default class MaintenanceSchema {
  static schema = {
    name: "List",
    properties: {
      id: { type: "string", indexed: true },
      service: "string",
      price: "float",
      date: "string"
    },
    primaryKey: "id"
  };
}