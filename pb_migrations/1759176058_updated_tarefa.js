/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_tarefa")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "@collection.usuario.id = @request.auth.id\n",
    "listRule": "@collection.usuario.id = @request.auth.id\n",
    "updateRule": "@collection.usuario.id = @request.auth.id\n",
    "viewRule": "@collection.usuario.id = @request.auth.id\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_tarefa")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
