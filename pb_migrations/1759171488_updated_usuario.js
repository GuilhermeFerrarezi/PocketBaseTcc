/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("col_usuario")

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "email1542800728",
    "name": "field",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(2, new Field({
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
  }))

  // add field
  collection.fields.addAt(3, new Field({
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
  }))

  // add field
  collection.fields.addAt(4, new Field({
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
  }))

  // add field
  collection.fields.addAt(5, new Field({
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
  }))

  // add field
  collection.fields.addAt(6, new Field({
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
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "bool4006779399",
    "name": "tutorialFeito",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // update field
  collection.fields.addAt(0, new Field({
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
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("col_usuario")

  // remove field
  collection.fields.removeById("email1542800728")

  // remove field
  collection.fields.removeById("text1421693708")

  // remove field
  collection.fields.removeById("text547777549")

  // remove field
  collection.fields.removeById("number2467829782")

  // remove field
  collection.fields.removeById("text741955218")

  // remove field
  collection.fields.removeById("relation1642308920")

  // remove field
  collection.fields.removeById("bool4006779399")

  // update field
  collection.fields.addAt(0, new Field({
    "autogeneratePattern": "[a-z0-9]{15}",
    "hidden": false,
    "id": "text3208210256",
    "max": 15,
    "min": 1,
    "name": "id",
    "pattern": "^[a-z0-9]+$",
    "presentable": false,
    "primaryKey": true,
    "required": true,
    "system": true,
    "type": "text"
  }))

  return app.save(collection)
})
