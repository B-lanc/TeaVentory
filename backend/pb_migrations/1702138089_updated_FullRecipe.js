/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  IR.item_id as item_id,\n  IR.inv_id as inv_id,\n  IR.qty as qrt,\n  mid_mid.item_id as mid_id,\n  mid_mid.inv_id as mid_inv_id,\n  mid_mid.qty as mid_qty,\n  mid_mid.size as mid_size\nFROM \n  item_recipes as IR\nLEFT JOIN \n  (SELECT\n   MIR.item_id as item_id,\n   MIR.inv_id as inv_id,\n   MIR.qty as qty,\n   MI.size as size\n  FROM\n   middle_item_recipes as MIR\n  LEFT JOIN \n   middle_items as MI\n  ON \n   MI.item_id = MIR.item_id\n) as mid_mid\nON \n  IR.mid_id = mid_mid.item_id"
  }

  // remove
  collection.schema.removeField("vpwf4gdb")

  // remove
  collection.schema.removeField("cwkboqo3")

  // remove
  collection.schema.removeField("ufpmow0a")

  // remove
  collection.schema.removeField("7wl2time")

  // remove
  collection.schema.removeField("8pk7t2mr")

  // remove
  collection.schema.removeField("o7zbf98x")

  // remove
  collection.schema.removeField("i02qjize")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  IR.item_id as item_id,\n  IR.inv_id as inv_id,\n  IR.qty as qrt,\n  MI.item_id as mid_id,\n  MIR.inv_id as mid_inv_id,\n  MIR.qty as mid_qty,\n  MI.size as mid_size\nFROM \n  item_recipes as IR\nLEFT JOIN \n  middle_item_recipes as MIR\nON \n  IR.mid_id = MIR.item_id\nLEFT JOIN \n  middle_items as MI\nON \n  MI.item_id = MIR.item_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vpwf4gdb",
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
    "id": "cwkboqo3",
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
    "id": "ufpmow0a",
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
    "id": "7wl2time",
    "name": "mid_id",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8pk7t2mr",
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
    "id": "o7zbf98x",
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
    "id": "i02qjize",
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

  return dao.saveCollection(collection)
})
