/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  item_recipes.item_id as item_id,\n  item_recipes.inv_id as inv_id1,\n  item_recipes.qty as qty1,\n  mid.inv_id as inv_id2,\n  mid.qty as qty2,\n  mid.size as size\nFROM \n  item_recipes\nLEFT JOIN \n  (middle_item_recipes\n  LEFT JOIN \n    middle_items\n  ON \n    middle_item_recipes.item_id = middle_items.item_id\n  ) as mid\nON item_recipes.mid_id = mid.item_id"
  }

  // remove
  collection.schema.removeField("wgd8eagi")

  // remove
  collection.schema.removeField("fo8qqe4i")

  // remove
  collection.schema.removeField("jlshezdu")

  // remove
  collection.schema.removeField("n19n65ib")

  // remove
  collection.schema.removeField("t6tjd0jy")

  // remove
  collection.schema.removeField("zpn1nmvv")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odmiefn3e047d65")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  item_recipes.item_id as item_id,\n  item_recipes.inv_id as inv_id1,\n  item_recipes.qty as qty1,\n  middle_item_recipes.inv_id as inv_id2,\n  middle_item_recipes.qty as qty2,\n  middle_items.size as size\nFROM \n  item_recipes\nLEFT JOIN \n  (middle_item_recipes\n  LEFT JOIN middle_items\nON middle_item_recipes.item_id = middle_items.item_id)\nON item_recipes.mid_id = middle_item_recipes.item_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgd8eagi",
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
    "id": "fo8qqe4i",
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
    "id": "jlshezdu",
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
    "id": "n19n65ib",
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
    "id": "t6tjd0jy",
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
    "id": "zpn1nmvv",
    "name": "size",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

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

  return dao.saveCollection(collection)
})
