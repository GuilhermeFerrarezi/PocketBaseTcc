/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2511853984")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "@request.auth.id = id\n",
    "listRule": "@request.auth.id = id\n",
    "updateRule": "@request.auth.id = id\n",
    "viewRule": "@request.auth.id = id\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2511853984")

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
