/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2511853984")

  // add field
  collection.fields.addAt(8, new Field({
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
  collection.fields.addAt(9, new Field({
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
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "col_tema",
    "hidden": false,
    "id": "relation1642308920",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "tema",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool4006779399",
    "name": "tutorialFeito",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2511853984")

  // remove field
  collection.fields.removeById("number2467829782")

  // remove field
  collection.fields.removeById("text741955218")

  // remove field
  collection.fields.removeById("relation1642308920")

  // remove field
  collection.fields.removeById("bool4006779399")

  return app.save(collection)
})
