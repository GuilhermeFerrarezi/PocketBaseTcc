/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_prioridade")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario",
    "listRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario",
    "updateRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario",
    "viewRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario"
  }, collection)

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_prioridade")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("relation853334959")

  return app.save(collection)
})
