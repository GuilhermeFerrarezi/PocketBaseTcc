/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_subtarefa")

  // add field
  collection.fields.addAt(1, new Field({
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

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "col_usuario",
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

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text213263756",
    "max": 0,
    "min": 0,
    "name": "nomeSubtarefa",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool1149024691",
    "name": "concluido",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_subtarefa")

  // remove field
  collection.fields.removeById("relation1611326496")

  // remove field
  collection.fields.removeById("relation853334959")

  // remove field
  collection.fields.removeById("text213263756")

  // remove field
  collection.fields.removeById("bool1149024691")

  return app.save(collection)
})
