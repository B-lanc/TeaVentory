/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7t1e02xpb2ogdr")

  collection.indexes = [
    "CREATE INDEX `idx_VRzgoCJ` ON `middle_items` (`item_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mznipxe9",
    "name": "item_id",
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

  collection.indexes = []

  // remove
  collection.schema.removeField("mznipxe9")

  return dao.saveCollection(collection)
})
