/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e7t1e02xpb2ogdr",
    "created": "2023-12-05 14:15:55.851Z",
    "updated": "2023-12-05 14:15:55.851Z",
    "name": "middle_items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l5eiotmc",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e7t1e02xpb2ogdr");

  return dao.deleteCollection(collection);
})
