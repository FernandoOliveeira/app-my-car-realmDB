export default class MaintenanceSchema {
  static schema = {
    name: "List",
    properties: {
      id: { type: "string", indexed: true },
      name: "string",
      service: "string",
      price: "int",
      labor: "int",
      date: "string"
    },
    primaryKey: "id"
  };
}