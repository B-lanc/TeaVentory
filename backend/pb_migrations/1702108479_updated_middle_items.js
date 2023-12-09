/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7t1e02xpb2ogdr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vtdelqwg",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7t1e02xpb2ogdr")

  // remove
  collection.schema.removeField("vtdelqwg")

  return dao.saveCollection(collection)
})
