/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "[0-9]{15}",
    "hidden": false,
    "id": "text1817795103",
    "max": 0,
    "min": 0,
    "name": "idAnotacao",
    "pattern": "[0-9]",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // remove field
  collection.fields.removeById("text1817795103")

  return app.save(collection)
})
