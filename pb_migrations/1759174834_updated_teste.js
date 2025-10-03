/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2511853984")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_kcfyc73i6j` ON `usuario` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_kcfyc73i6j` ON `usuario` (`email`) WHERE `email` != ''"
    ],
    "name": "usuario"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2511853984")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_kcfyc73i6j` ON `teste` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_kcfyc73i6j` ON `teste` (`email`) WHERE `email` != ''"
    ],
    "name": "teste"
  }, collection)

  return app.save(collection)
})
