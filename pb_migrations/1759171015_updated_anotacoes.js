/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // add field
  collection.fields.addAt(1, new Field({
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

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3906575831",
    "max": 0,
    "min": 0,
    "name": "nomeAnotacao",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text36406763",
    "max": 0,
    "min": 0,
    "name": "descricao",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(0, new Field({
    "autogeneratePattern": "[0-9]{15}",
    "hidden": false,
    "id": "text3208210256",
    "max": 15,
    "min": 1,
    "name": "id",
    "pattern": "^[0-9]+$",
    "presentable": false,
    "primaryKey": true,
    "required": true,
    "system": true,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // remove field
  collection.fields.removeById("text853334959")

  // remove field
  collection.fields.removeById("text3906575831")

  // remove field
  collection.fields.removeById("text36406763")

  // update field
  collection.fields.addAt(0, new Field({
    "autogeneratePattern": "[a-z0-9]{15}",
    "hidden": false,
    "id": "text3208210256",
    "max": 15,
    "min": 1,
    "name": "id",
    "pattern": "^[a-z0-9]+$",
    "presentable": false,
    "primaryKey": true,
    "required": true,
    "system": true,
    "type": "text"
  }))

  return app.save(collection)
})
