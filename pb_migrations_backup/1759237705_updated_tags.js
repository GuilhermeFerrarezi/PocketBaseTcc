/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_tags")

  // update collection data
  unmarshal({
    "listRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_tags")

  // update collection data
  unmarshal({
    "listRule": "@collection.usuario.id = @request.auth.id || @request.auth.Id ?= @collection._superusers.id\n"
  }, collection)

  return app.save(collection)
})
