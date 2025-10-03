/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": true,
    "id": "date3601428964",
    "max": "",
    "min": "",
    "name": "dataDeCriacao",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // remove field
  collection.fields.removeById("date3601428964")

  return app.save(collection)
})
