export default class MaintenanceSchema {
  static schema = {
    name: "List",
    properties: {
      id: { type: "string", indexed: true },
      name: "string",
      service: "string",
      price: "float",
      labor: "float",
      date: "string"
    },
    primaryKey: "id"
  };
}