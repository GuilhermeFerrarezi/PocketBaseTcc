/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_lembrete")

  // remove field
  collection.fields.removeById("relation3329381332")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_lembrete")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "col_lembrete",
    "hidden": false,
    "id": "relation3329381332",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "idLembrete",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
