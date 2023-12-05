/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u5luzlc5vp50e9h")

  collection.name = "middle_item_recipes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u5luzlc5vp50e9h")

  collection.name = "middle_item_recipe"

  return dao.saveCollection(collection)
})
