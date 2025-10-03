/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_tags")

  // update collection data
  unmarshal({
    "createRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_tags")

  // update collection data
  unmarshal({
    "createRule": "idUsuario ?= @collection.usuario.id || @request.auth.Id ?= @collection._superusers.id"
  }, collection)

  return app.save(collection)
})
