/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7t1e02xpb2ogdr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qdtzndrc",
    "name": "unit",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7t1e02xpb2ogdr")

  // remove
  collection.schema.removeField("qdtzndrc")

  return dao.saveCollection(collection)
})
