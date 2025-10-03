/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_prioridade")

  // update collection data
  unmarshal({
    "deleteRule": "idUsuario = @request.auth.id || @request.auth.Id ?= @collection._superusers.id",
    "listRule": "idUsuario = @request.auth.id || @request.auth.Id ?= @collection._superusers.id",
    "updateRule": "idUsuario = @request.auth.id || @request.auth.Id ?= @collection._superusers.id",
    "viewRule": "idUsuario = @request.auth.id || @request.auth.Id ?= @collection._superusers.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_prioridade")

  // update collection data
  unmarshal({
    "deleteRule": "@collection.usuario.id = @request.auth.id\n",
    "listRule": "idUsuario ?= @collection.usuario.id || @request.auth.Id ?= @collection._superusers.id",
    "updateRule": "@collection.usuario.id = @request.auth.id\n",
    "viewRule": "idUsuario ?= @collection.usuario.id || @request.auth.Id ?= @collection._superusers.id"
  }, collection)

  return app.save(collection)
})
