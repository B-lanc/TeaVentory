/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4l87i5l4554qiol");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4l87i5l4554qiol",
    "created": "2023-12-09 14:41:11.740Z",
    "updated": "2023-12-09 14:43:24.624Z",
    "name": "Testing",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l1p92hof",
        "name": "amount",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  transactions.item_id AS id, SUM(transactions.qty) AS amount\nFROM transactions\nGROUP BY transactions.item_id"
    }
  });

  return Dao(db).saveCollection(collection);
})
