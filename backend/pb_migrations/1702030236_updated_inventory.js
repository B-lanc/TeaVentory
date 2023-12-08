/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0adj6uktpm7kaff")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yqfgfjdw",
    "name": "delivery_duration",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ivyoviit",
    "name": "delivery_delay",
    "type": "number",
    "required": false,
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

  // remove
  collection.schema.removeField("yqfgfjdw")

  // remove
  collection.schema.removeField("ivyoviit")

  return dao.saveCollection(collection)
})
