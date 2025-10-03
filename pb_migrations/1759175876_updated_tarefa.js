/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_tarefa")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2511853984",
    "hidden": false,
    "id": "relation853334959",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "idUsuario",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_tarefa")

  // remove field
  collection.fields.removeById("relation853334959")

  return app.save(collection)
})
