/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_tags")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": true,
    "id": "autodate3601428964",
    "name": "dataDeCriacao",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": true,
    "id": "autodate2364024082",
    "name": "dataDeModificacao",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_tags")

  // remove field
  collection.fields.removeById("autodate3601428964")

  // remove field
  collection.fields.removeById("autodate2364024082")

  return app.save(collection)
})
