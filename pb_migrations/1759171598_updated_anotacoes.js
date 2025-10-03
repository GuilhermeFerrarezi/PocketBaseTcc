/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // remove field
  collection.fields.removeById("text1817795103")

  // remove field
  collection.fields.removeById("text853334959")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "col_usuario",
    "hidden": false,
    "id": "relation853334959",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "idUsuario",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
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

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "[0-9]{15}",
    "hidden": false,
    "id": "text853334959",
    "max": 15,
    "min": 1,
    "name": "idUsuario",
    "pattern": "[0-9]",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation853334959")

  return app.save(collection)
})
