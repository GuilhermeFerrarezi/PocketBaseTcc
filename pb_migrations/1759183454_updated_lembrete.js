/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_lembrete")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": true,
    "id": "autodate3601428964",
    "name": "dataDeCriacao",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(8, new Field({
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
  const collection = app.findCollectionByNameOrId("col_lembrete")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "autodate3601428964",
    "name": "dataDeCriacao",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "autodate2364024082",
    "name": "dataDeModificacao",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
})
