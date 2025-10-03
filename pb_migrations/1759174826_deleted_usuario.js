/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_usuario");

  return app.delete(collection);
}, (app) => {
  const collection = new Collection({
    "createRule": "@collection._superusers.email ?= @request.auth.email",
    "deleteRule": "@collection._superusers.email ?= @request.auth.email",
    "fields": [
      {
        "autogeneratePattern": "[0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 1,
        "name": "id",
        "pattern": "[0-9]",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "exceptDomains": [],
        "hidden": false,
        "id": "email1542800728",
        "name": "field",
        "onlyDomains": [],
        "presentable": false,
        "required": true,
        "system": false,
        "type": "email"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1421693708",
        "max": 0,
        "min": 0,
        "name": "nome",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text547777549",
        "max": 0,
        "min": 0,
        "name": "tipoNeurodivergencia",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number2467829782",
        "max": null,
        "min": null,
        "name": "idade",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text741955218",
        "max": 0,
        "min": 0,
        "name": "sexo",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "col_tema",
        "hidden": false,
        "id": "relation1642308920",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "tema",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "bool4006779399",
        "name": "tutorialFeito",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "bool"
      }
    ],
    "id": "col_usuario",
    "indexes": [],
    "listRule": "@collection._superusers.email ?= @request.auth.email",
    "name": "usuario",
    "system": false,
    "type": "base",
    "updateRule": "@collection._superusers.email ?= @request.auth.email",
    "viewRule": "@collection._superusers.email ?= @request.auth.email"
  });

  return app.save(collection);
})
