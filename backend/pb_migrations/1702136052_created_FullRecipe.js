/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "odmiefn3e047d65",
    "created": "2023-12-09 15:34:12.045Z",
    "updated": "2023-12-09 15:34:12.045Z",
    "name": "FullRecipe",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c5ldlhqf",
        "name": "item_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "93n01gldmpgecwd",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "vszpywn7",
        "name": "inv_id1",
        "type": "relation",
        "required": false,
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
        "id": "0slp5llu",
        "name": "qty1",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "lojdissg",
        "name": "inv_id2",
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
        "id": "mxl40ydx",
        "name": "qty2",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": true
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
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  item_recipes.item_id as item_id,\n  item_recipes.inv_id as inv_id1,\n  item_recipes.qty as qty1,\n  middle_item_recipes.inv_id as inv_id2,\n  middle_item_recipes.qty as qty2\nFROM item_recipes\nLEFT JOIN middle_item_recipes\nON item_recipes.mid_id = middle_item_recipes.item_id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65");

  return dao.deleteCollection(collection);
})
