/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  IR.item_id as item_id,\n  IR.inv_id as inv_id,\n  IR.qty as qrt,\n  MI.item_id as mid_id,\n  MIR.inv_id as mid_inv_id,\n  MIR.qty as mid_qty,\n  MI.size as mid_size\nFROM \n  item_recipes as IR\nLEFT JOIN \n  middle_item_recipes as MIR\nON \n  IR.mid_id = MIR.item_id\nLEFT JOIN \n  middle_items as MI\nON \n  MI.item_id = MIR.item_id"
  }

  // remove
  collection.schema.removeField("eyrslrkt")

  // remove
  collection.schema.removeField("5icrvuhw")

  // remove
  collection.schema.removeField("piff9rvg")

  // remove
  collection.schema.removeField("kn3fwnby")

  // remove
  collection.schema.removeField("ovewhg6j")

  // remove
  collection.schema.removeField("eomybmnr")

  // remove
  collection.schema.removeField("nnl6v91m")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  IR.item_id as item_id,\n  IR.inv_id as inv_id,\n  IR.qty as qrt,\n  MIR.item_id as mid_id,\n  MIR.inv_id as mid_inv_id,\n  MIR.qty as mid_qty,\n  MI.size as mid_size\nFROM \n  item_recipes as IR\nLEFT JOIN \n  middle_item_recipes as MIR\nON \n  IR.mid_id = MIR.item_id\nLEFT JOIN \n  middle_items as MI\nON \n  MIR.item_id = MI.item_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyrslrkt",
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
    "id": "5icrvuhw",
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
    "id": "piff9rvg",
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
    "id": "kn3fwnby",
    "name": "mid_id",
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
    "id": "ovewhg6j",
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
    "id": "eomybmnr",
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
    "id": "nnl6v91m",
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

  return dao.saveCollection(collection)
})
