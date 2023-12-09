/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs8zsic2urhb1ze")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  middle_item_recipes.item_id,\n  middle_item_recipes.inv_id,\n  middle_items.size\nFROM\n  middle_item_recipes\nLEFT JOIN\n  middle_items\nON\n  middle_item_recipes.item_id = middle_items.id"
  }

  // remove
  collection.schema.removeField("gnnsaszq")

  // remove
  collection.schema.removeField("apxbcebc")

  // remove
  collection.schema.removeField("s45k2fow")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vt7fz1qp",
    "name": "item_id",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e7t1e02xpb2ogdr",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxcg9nqg",
    "name": "inv_id",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9omb7n2e",
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
  const collection = dao.findCollectionByNameOrId("zs8zsic2urhb1ze")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  middle_item_recipes.item_id,\n  middle_item_recipes.inv_id,\n  middle_items.size\nFROM\n  middle_item_recipes\nLEFT JOIN\n  middle_items\nON\n  middle_item_recipes.item_id = middle_items.item_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gnnsaszq",
    "name": "item_id",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e7t1e02xpb2ogdr",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apxbcebc",
    "name": "inv_id",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s45k2fow",
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

  // remove
  collection.schema.removeField("vt7fz1qp")

  // remove
  collection.schema.removeField("cxcg9nqg")

  // remove
  collection.schema.removeField("9omb7n2e")

  return dao.saveCollection(collection)
})
