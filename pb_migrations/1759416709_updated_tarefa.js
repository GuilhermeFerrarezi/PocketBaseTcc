/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_tarefa")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "col_tags",
    "hidden": false,
    "id": "relation583117316",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "idTag",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_tarefa")

  // remove field
  collection.fields.removeById("relation583117316")

  return app.save(collection)
})
