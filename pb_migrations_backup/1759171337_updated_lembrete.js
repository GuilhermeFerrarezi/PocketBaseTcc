/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "col_usuario",
    "hidden": false,
    "id": "relation577089629",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "usuario",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date2918445923",
    "max": "",
    "min": "",
    "name": "data",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1123193884",
    "max": 0,
    "min": 0,
    "name": "nomeLembrete",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
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
  const collection = app.findCollectionByNameOrId("col_lembrete")

  // remove field
  collection.fields.removeById("text3329381332")

  // remove field
  collection.fields.removeById("text1611326496")

  // remove field
  collection.fields.removeById("relation577089629")

  // remove field
  collection.fields.removeById("date2918445923")

  // remove field
  collection.fields.removeById("text1123193884")

  // remove field
  collection.fields.removeById("bool1149024691")

  return app.save(collection)
})
