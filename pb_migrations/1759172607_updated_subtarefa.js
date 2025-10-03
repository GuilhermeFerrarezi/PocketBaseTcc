/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_subtarefa")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario",
    "listRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario",
    "updateRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario",
    "viewRule": "@request.auth.id != \"\" && @request.auth.id = idUsuario"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_subtarefa")

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
