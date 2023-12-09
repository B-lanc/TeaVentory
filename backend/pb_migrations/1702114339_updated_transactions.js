/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aquplyqg3tkyusd")

  // remove
  collection.schema.removeField("zeeeqkm9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gzgtamiy",
    "name": "topping_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "93n01gldmpgecwd",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aquplyqg3tkyusd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zeeeqkm9",
    "name": "topping_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e7t1e02xpb2ogdr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("gzgtamiy")

  return dao.saveCollection(collection)
})
