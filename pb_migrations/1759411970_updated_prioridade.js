/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_prioridade")

  // update collection data
  unmarshal({
    "listRule": "idUsuario = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_prioridade")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id ?= @collection.usuario.id || @request.auth.Id ?= @collection._superusers.id"
  }, collection)

  return app.save(collection)
})
