/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_tarefa")

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
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "col_prioridade",
    "hidden": false,
    "id": "relation3907574794",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "idPrioridade",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
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

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date513635071",
    "max": "",
    "min": "",
    "name": "dataInicio",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date1314219343",
    "max": "",
    "min": "",
    "name": "dataConclusao",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool2747569332",
    "name": "concluida",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_tarefa")

  // remove field
  collection.fields.removeById("relation853334959")

  // remove field
  collection.fields.removeById("relation3907574794")

  // remove field
  collection.fields.removeById("text36406763")

  // remove field
  collection.fields.removeById("date513635071")

  // remove field
  collection.fields.removeById("date1314219343")

  // remove field
  collection.fields.removeById("bool2747569332")

  return app.save(collection)
})
