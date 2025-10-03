/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // update collection data
  unmarshal({
    "createRule": "idUsuario ?= @request.auth.id || @request.auth.Id ?= @collection._superusers.id",
    "deleteRule": "idUsuario = @request.auth.id || @request.auth.Id ?= @collection._superusers.id",
    "listRule": "idUsuario = @request.auth.id || @request.auth.Id ?= @collection._superusers.id",
    "updateRule": "idUsuario = @request.auth.id || @request.auth.Id ?= @collection._superusers.id",
    "viewRule": "idUsuario = @request.auth.id || @request.auth.Id ?= @collection._superusers.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_anotacoes")

  // update collection data
  unmarshal({
    "createRule": "idUsuario ?= @collection.usuario.id || @request.auth.Id ?= @collection._superusers.id",
    "deleteRule": "@collection.usuario.id = @request.auth.id\n",
    "listRule": "@collection.usuario.id = @request.auth.id\n",
    "updateRule": "@collection.usuario.id = @request.auth.id\n",
    "viewRule": "@collection.usuario.id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
