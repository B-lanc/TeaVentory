/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  item_recipes.item_id as item_id,\n  item_recipes.inv_id as inv_id,\n  item_recipes.qty as qty,\n  middle_item_recipes.inv_id as mid_inv_id,\n  middle_item_recipes.qty as mid_qty,\n  middle_items.size as mid_size\nFROM\n  item_recipes\nLEFT JOIN\n  middle_item_recipes\non\n  item_recipes.mid_id = middle_item_recipes.item_id\nLEFT JOIN\n  middle_items\non\n  middle_item_recipes.item_id = middle_items.id"
  }

  // remove
  collection.schema.removeField("4f2yk7aq")

  // remove
  collection.schema.removeField("pzyowynk")

  // remove
  collection.schema.removeField("1hiqxzu1")

  // remove
  collection.schema.removeField("qx4xbhuj")

  // remove
  collection.schema.removeField("hfek6w4k")

  // remove
  collection.schema.removeField("xs1jlcom")

  // remove
  collection.schema.removeField("crc9j4r0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "okgkzwvz",
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
    "id": "negyomxi",
    "name": "inv_id",
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
    "id": "er1fndrj",
    "name": "qty",
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
    "id": "gk0yh4sv",
    "name": "mid_inv_id",
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
    "id": "5qk9wujj",
    "name": "mid_qty",
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
    "id": "pfw2r5it",
    "name": "mid_size",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  IR.item_id as item_id,\n  IR.inv_id as inv_id,\n  IR.qty as qrt,\n  mid_mid.item_id as mid_id,\n  mid_mid.inv_id as mid_inv_id,\n  mid_mid.qty as mid_qty,\n  mid_mid.size as mid_size\nFROM \n  item_recipes as IR\nLEFT JOIN \n  (SELECT\n   MIR.item_id as item_id,\n   MIR.inv_id as inv_id,\n   MIR.qty as qty,\n   MI.size as size\n  FROM\n   middle_item_recipes as MIR\n  LEFT JOIN \n   middle_items as MI\n  ON \n   MI.item_id = MIR.item_id\n) as mid_mid\nON \n  IR.mid_id = mid_mid.item_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4f2yk7aq",
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
    "id": "pzyowynk",
    "name": "inv_id",
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
    "id": "1hiqxzu1",
    "name": "qrt",
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
    "id": "qx4xbhuj",
    "name": "mid_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hfek6w4k",
    "name": "mid_inv_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xs1jlcom",
    "name": "mid_qty",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "crc9j4r0",
    "name": "mid_size",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("okgkzwvz")

  // remove
  collection.schema.removeField("negyomxi")

  // remove
  collection.schema.removeField("er1fndrj")

  // remove
  collection.schema.removeField("gk0yh4sv")

  // remove
  collection.schema.removeField("5qk9wujj")

  // remove
  collection.schema.removeField("pfw2r5it")

  return dao.saveCollection(collection)
})
