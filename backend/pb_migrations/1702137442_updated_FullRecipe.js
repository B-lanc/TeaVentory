/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  IR.item_id as item_id,\n  IR.inv_id as inv_id,\n  IR.qty as qrt,\n  MIR.inv_id as mid_inv_id,\n  MIR.qty as mid_qty,\n  MI.size as mid_size\nFROM \n  item_recipes as IR\nLEFT JOIN \n  middle_item_recipes as MIR\nON \n  IR.mid_id = MIR.item_id\nLEFT JOIN \n  middle_items as MI\nON \n  MIR.item_id = MI.item_id"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vfvnymef",
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
    "id": "fij6rrhd",
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
    "id": "jcs8ufaj",
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
    "id": "4edxhcxc",
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
    "id": "dz6rwnpy",
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
    "id": "9mbpr1kw",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  IR.item_id as item_id,\n  IR.inv_id as inv_id1,\n  IR.qty as qty1,\n  MIR.inv_id as inv_id2,\n  MIR.qty as qty2,\n  MI.size as size\nFROM \n  item_recipes as IR\nLEFT JOIN \n  middle_item_recipes as MIR\nON \n  IR.mid_id = MIR.item_id\nLEFT JOIN \n  middle_items as MI\nON \n  MIR.item_id = MI.item_id"
  }

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

  // remove
  collection.schema.removeField("vfvnymef")

  // remove
  collection.schema.removeField("fij6rrhd")

  // remove
  collection.schema.removeField("jcs8ufaj")

  // remove
  collection.schema.removeField("4edxhcxc")

  // remove
  collection.schema.removeField("dz6rwnpy")

  // remove
  collection.schema.removeField("9mbpr1kw")

  return dao.saveCollection(collection)
})
