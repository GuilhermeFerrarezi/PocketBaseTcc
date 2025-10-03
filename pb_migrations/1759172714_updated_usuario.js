/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_usuario")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.id = id",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = id",
    "listRule": "@request.auth.id != \"\" && @request.auth.id = id",
    "updateRule": "@request.auth.id != \"\" && @request.auth.id = id",
    "viewRule": "@request.auth.id != \"\" && @request.auth.id = id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_usuario")

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
