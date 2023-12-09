/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  IR.item_id as item_id,\n  IR.inv_id as inv_id1,\n  IR.qty as qty1,\n  MIR.inv_id as inv_id2,\n  MIR.qty as qty2,\n  MI.size as size\nFROM \n  item_recipes as IR\nLEFT JOIN \n  middle_item_recipes as MIR\nON \n  IR.mid_id = MIR.item_id\nLEFT JOIN \n  middle_items as MI\nON \n  MIR.item_id = MI.item_id"
  }

  // remove
  collection.schema.removeField("2rlzkvph")

  // remove
  collection.schema.removeField("snlejr0r")

  // remove
  collection.schema.removeField("0fqgqmx4")

  // remove
  collection.schema.removeField("puj7rffd")

  // remove
  collection.schema.removeField("futass9i")

  // remove
  collection.schema.removeField("kvebcmmy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mvulkv2i",
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
    "id": "tfjzthzs",
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
    "id": "smzdiisk",
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
    "id": "abxahmdg",
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
    "id": "v7xumjdg",
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
    "id": "fohb4fwe",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  item_recipes.item_id as item_id,\n  item_recipes.inv_id as inv_id1,\n  item_recipes.qty as qty1,\n  mid.inv_id as inv_id2,\n  mid.qty as qty2,\n  mid.size as size\nFROM \n  item_recipes\nLEFT JOIN \n  (middle_item_recipes\n  LEFT JOIN \n    middle_items\n  ON \n    middle_item_recipes.item_id = middle_items.item_id\n  ) as mid\nON item_recipes.mid_id = mid.item_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2rlzkvph",
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
    "id": "snlejr0r",
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
    "id": "0fqgqmx4",
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
    "id": "puj7rffd",
    "name": "inv_id2",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "futass9i",
    "name": "qty2",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kvebcmmy",
    "name": "size",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("mvulkv2i")

  // remove
  collection.schema.removeField("tfjzthzs")

  // remove
  collection.schema.removeField("smzdiisk")

  // remove
  collection.schema.removeField("abxahmdg")

  // remove
  collection.schema.removeField("v7xumjdg")

  // remove
  collection.schema.removeField("fohb4fwe")

  return dao.saveCollection(collection)
})
