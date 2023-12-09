/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  item_recipes.item_id as item_id,\n  item_recipes.inv_id as inv_id1,\n  item_recipes.qty as qty1,\n  middle_item_recipes.inv_id as inv_id2,\n  middle_item_recipes.qty as qty2,\n  middle_items.size as size\nFROM item_recipes\nLEFT JOIN middle_item_recipes\nON item_recipes.mid_id = middle_item_recipes.item_id\nLEFT JOIN middle_items\nON middle_item_recipes.item_id = middle_items.item_id"
  }

  // remove
  collection.schema.removeField("c5ldlhqf")

  // remove
  collection.schema.removeField("vszpywn7")

  // remove
  collection.schema.removeField("0slp5llu")

  // remove
  collection.schema.removeField("lojdissg")

  // remove
  collection.schema.removeField("mxl40ydx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cpo1kwao",
    "name": "item_id",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "93n01gldmpgecwd",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hiqy4hcr",
    "name": "inv_id1",
    "type": "relation",
    "required": false,
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
    "id": "xbmlcvbg",
    "name": "qty1",
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
    "id": "pqdah2ra",
    "name": "inv_id2",
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
    "id": "tmbo59ts",
    "name": "qty2",
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
    "id": "3xmp9hwi",
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
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  item_recipes.item_id as item_id,\n  item_recipes.inv_id as inv_id1,\n  item_recipes.qty as qty1,\n  middle_item_recipes.inv_id as inv_id2,\n  middle_item_recipes.qty as qty2\nFROM item_recipes\nLEFT JOIN middle_item_recipes\nON item_recipes.mid_id = middle_item_recipes.item_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c5ldlhqf",
    "name": "item_id",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "93n01gldmpgecwd",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vszpywn7",
    "name": "inv_id1",
    "type": "relation",
    "required": false,
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
    "id": "0slp5llu",
    "name": "qty1",
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
    "id": "lojdissg",
    "name": "inv_id2",
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
    "id": "mxl40ydx",
    "name": "qty2",
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

  // remove
  collection.schema.removeField("cpo1kwao")

  // remove
  collection.schema.removeField("hiqy4hcr")

  // remove
  collection.schema.removeField("xbmlcvbg")

  // remove
  collection.schema.removeField("pqdah2ra")

  // remove
  collection.schema.removeField("tmbo59ts")

  // remove
  collection.schema.removeField("3xmp9hwi")

  return dao.saveCollection(collection)
})
