/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zs8zsic2urhb1ze",
    "created": "2023-12-09 16:10:26.651Z",
    "updated": "2023-12-09 16:10:26.651Z",
    "name": "mid_mid",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ifldqqdi",
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
        "id": "zn0jg64g",
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
        "id": "qepperoy",
        "name": "size",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
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
    "options": {
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  middle_item_recipes.item_id,\n  middle_item_recipes.inv_id,\n  middle_items.size\nFROM\n  middle_item_recipes\nLEFT JOIN\n  middle_items\nON\n  middle_item_recipes.item_id = middle_items.item_id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zs8zsic2urhb1ze");

  return dao.deleteCollection(collection);
})
