/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u5luzlc5vp50e9h",
    "created": "2023-12-05 14:19:49.876Z",
    "updated": "2023-12-05 14:19:49.876Z",
    "name": "middle_item_recipe",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cr4lvk2s",
        "name": "item_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "e7t1e02xpb2ogdr",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "eg5jrda4",
        "name": "inv_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "0adj6uktpm7kaff",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "yavizql1",
        "name": "qty",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("u5luzlc5vp50e9h");

  return dao.deleteCollection(collection);
})
