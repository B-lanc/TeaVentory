/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.listRule = "@request.auth.id != ''"
  collection.viewRule = "@request.auth.id != ''"

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkg6pve3",
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
    "id": "ot2egxuz",
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
    "id": "tanfq2sn",
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
    "id": "2d6era7o",
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
    "id": "4lo64zjy",
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
    "id": "rzyphdta",
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

  collection.listRule = null
  collection.viewRule = null

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

  // remove
  collection.schema.removeField("vkg6pve3")

  // remove
  collection.schema.removeField("ot2egxuz")

  // remove
  collection.schema.removeField("tanfq2sn")

  // remove
  collection.schema.removeField("2d6era7o")

  // remove
  collection.schema.removeField("4lo64zjy")

  // remove
  collection.schema.removeField("rzyphdta")

  return dao.saveCollection(collection)
})
