> db.buttons.find()
{ "_id" : ObjectId("5a8db0a629376d30f37961aa"), "color" : "red", "__v" : 0 }
{ "_id" : ObjectId("5a8db0b8de8a633107a215cb"), "color" : "red", "__v" : 0 }
{ "_id" : ObjectId("5a8db0be5b1d553117a07b53"), "color" : "blue", "__v" : 0 }

> db.buttons.update({color: "red"},{$set: {color: "aqua"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.buttons.find()
{ "_id" : ObjectId("5a8db0a629376d30f37961aa"), "color" : "aqua", "__v" : 0 }
{ "_id" : ObjectId("5a8db0b8de8a633107a215cb"), "color" : "red", "__v" : 0 }
{ "_id" : ObjectId("5a8db0be5b1d553117a07b53"), "color" : "blue", "__v" : 0 }

// Updates only one "red"