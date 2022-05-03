// WORKING OF MONGO DB:
/* 
	we have two layers 
		APPLiCATION:
			Frontend(UI)
			Backend(Server)
				through this only we write our queries to mongoDB
					Drivers
						driver converts the query to a language that mongo db understands
						driver is lite for node.JS as the node and mongo are in same language
							Node.js
								node.js and mongo db are in same language -> javascript
							Java
							Python	
							MongoDB Shell:
								we can query from here as we do query from node JS
								this is nothing but querying through the cmd					
		
		DATA:
			MongoDB server
				it listen to all the queries that we type
				mongo server is started automatically when pc is switched on but sometime it may not
				 	at that time"mongod" is the command to kick start the server 
			Storage engine
				after mongo server recieving the queries it asks the storage engine for the related documents
				the storage engine is the guy who automatically optimise where the data to be stored
				hard disk is the one that has all the data but if storage engine sees a frequently asked data then 
					it automatically stores that data in ram too 
				so that the frequently asked data can be retrieved quickly
				this job is done by the storage engine
				so when mongo server is asking for some data then storage server will check where the data is whether in ram 
					or hard disk and deliver that particular data to the server back and sever send the data back to node JS and to the front end
					so that the user can get what he need
				this optimization done by the storage engine boosts the performance
			Hard disk
				all the data's stored here
 */

// AGGREGATE FUNCTIONS
/* 	
	DATA GIVEN BY MENTOR:
		COLLECTION NAME -> ORDERS:
			[
				{ _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
				{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
				{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
				{ _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
				{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
				{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 },
			];
				here we have used our own underscore id so the mongoDB will not create a object id by itself
				it uses the id that we have set itself
				if we use only id instead id underscore id then mongo wont consider that id and it will create it own object id

	GROUPING HOW MANY QUANTITY ARE THERE IN URGENT ORDERS FOR EACH PRODUCT:
		REQUIRED OUTPUT:
	[
		{_id: "Steel beam", quantity: 50},
		{_id: "Iron rod", quantity: 60}
	]

	FIRST STEP:
		it involves filtering only the urgent orders
		
		[		
			{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
			{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },		
			{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
			{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 },
		];
	
	SECOND STEP:
		now we need to group it
		always group by dublicate things -> here by productName

	ABOVE TWO STEPS THROUGH CODES:
		FIRST STEP:
			db.orders.aggregate([{$match: {status: "urgent"}}])
				this will seperate the orders collection which has status as urgent
				while using aggragate function we seperate using match
				if it is normal where we just want to filter and we dont want to group there we
					will be using find function				

		SECOND STEP:
			db.orders.aggregate([{$match: {status: "urgent"}} "STEP ONE", {$group: {_id: "$productName", total: {$sum: "$quantity"}}}] "STEP TWO")	
				this will group the orders by status productName
				the dollar symbol for productName and quantity is to inform the server to look for their value
				in this step we are trying to recreate the order collection of our requirement
 */

// NODE JS:
/* 
	it is an environment to run javascript outside browser
	since browser has some limitiations
		it cannot control our local files
		like, 
			delete,
			edit or
			read local files
 */
