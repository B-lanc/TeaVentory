/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("93n01gldmpgecwd")

  collection.indexes = [
    "CREATE INDEX `idx_LL3h12G` ON `items` (`item_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3vbifnbu",
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
  const collection = dao.findCollectionByNameOrId("93n01gldmpgecwd")

  collection.indexes = []

  // remove
  collection.schema.removeField("3vbifnbu")

  return dao.saveCollection(collection)
})
