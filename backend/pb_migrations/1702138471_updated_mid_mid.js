/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs8zsic2urhb1ze")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  middle_item_recipes.item_id,\n  middle_item_recipes.inv_id,\n  middle_items.size\nFROM\n  middle_item_recipes\nINNER JOIN\n  middle_items\nON\n  middle_item_recipes.item_id = middle_items.item_id"
  }

  // remove
  collection.schema.removeField("ifldqqdi")

  // remove
  collection.schema.removeField("zn0jg64g")

  // remove
  collection.schema.removeField("qepperoy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kfurtghz",
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
    "id": "4upe4yso",
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
    "id": "yaxaz0fk",
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
    "id": "ifldqqdi",
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
    "id": "zn0jg64g",
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
    "id": "qepperoy",
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
  collection.schema.removeField("kfurtghz")

  // remove
  collection.schema.removeField("4upe4yso")

  // remove
  collection.schema.removeField("yaxaz0fk")

  return dao.saveCollection(collection)
})
