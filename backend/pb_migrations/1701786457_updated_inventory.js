/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0adj6uktpm7kaff")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ht8kvhvo",
    "name": "size",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0adj6uktpm7kaff")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ht8kvhvo",
    "name": "field",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
