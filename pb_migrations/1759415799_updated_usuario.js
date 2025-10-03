/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2511853984")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = id || @request.auth.Id ?= @collection._superusers.id",
    "updateRule": "@request.auth.id = id || @request.auth.Id ?= @collection._superusers.id\n",
    "viewRule": "@request.auth.id = id || @request.auth.Id ?= @collection._superusers.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2511853984")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = id\n",
    "updateRule": "@request.auth.id = id\n",
    "viewRule": "@request.auth.id = id\n"
  }, collection)

  return app.save(collection)
})
