/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4l87i5l4554qiol")

  collection.options = {
    "query": "SELECT \n  transactions.item_id AS id, \n  SUM(transactions.qty) AS amount\nFROM transactions\nGROUP BY \n  transactions.item_id"
  }

  // remove
  collection.schema.removeField("r3f1aoki")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4h1tmu4g",
    "name": "amount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4l87i5l4554qiol")

  collection.options = {
    "query": "SELECT \n  transactions.item_id AS id, \n  SUM(transactions.qty) AS amount\nFROM transactions\nGROUP BY transactions.item_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r3f1aoki",
    "name": "amount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("4h1tmu4g")

  return dao.saveCollection(collection)
})
