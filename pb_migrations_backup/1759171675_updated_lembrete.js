/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_lembrete")

  // remove field
  collection.fields.removeById("text3329381332")

  // remove field
  collection.fields.removeById("text1611326496")

  // add field
  collection.fields.addAt(1, new Field({
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

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "col_tarefa",
    "hidden": false,
    "id": "relation1611326496",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "idTarefa",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_lembrete")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "[0-9]{15}",
    "hidden": false,
    "id": "text3329381332",
    "max": 15,
    "min": 1,
    "name": "idLembrete",
    "pattern": "[0-9]",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "[0-9]{15}",
    "hidden": false,
    "id": "text1611326496",
    "max": 15,
    "min": 1,
    "name": "idTarefa",
    "pattern": "[0-9]",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation3329381332")

  // remove field
  collection.fields.removeById("relation1611326496")

  return app.save(collection)
})
