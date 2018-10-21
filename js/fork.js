var Ristoranti=[{
	"nome":"Moulin Rouge",
	"tipologia":["cucina creativa"],
	"via": "piazza durante",
	"citta":"Milano",
	"gps":{"lat":45.4886181,"long":9.2237361},
	"fascia_prezzo": "economico",  
	"review":3, 
	"posti":36,
	"menus":[[
		{
		"menu":"menu pizza",
		"antipasti":["patatine","olive fritte"],
		"primi":[],
		"secondi":["pizza a scelta"],
		"allergeni":["Crostacei e prodotti a base di crostacei","Pesce e prodotti a base di pesce","Soia e prodotti a base di soia","Latte e prodotti a base di latte","Lupini e prodotti a base di lupini","Molluschi e prodotti a base di molluschi"],
		"bevande":["acqua","coca-cola"],
		"prezzo":17.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Lunedi","Giovedi"],
				"sconto":0.20
			},
			{"tipo":"orario",
				"valore":["19-21"],
				"sconto":0.1
			}]
		},
				{
		"menu":"menu milanese",
		"antipasti":["polentina con cervo"],
		"primi":["risotto alla milanese"],
		"secondi":["cotoletta alla milanese"],
		"dolci":["barbajada"],
		"allergeni":["Cereali contenenti glutine","Soia e prodotti a base di soia","Latte e prodotti a base di latte","Frutta a guscio","Sedano e prodotti a base di sedano","Molluschi e prodotti a base di molluschi"],
		"bevande":["acqua","coca-cola","caffe"],
		"prezzo":45.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Martedi","Mercoledi"],
				"sconto":0.50
			}]
		}],[
		{
		"menu": "pizza menu",
		"Appetizers": ["chips", "fried olives"],
		"Firsts": [],
		"seconds": ["choice pizza"],
		"Allergens": ["Crustaceans and crustaceans", "Fish and fish products", "Soya and soy products", "Milk and milk products", "Lupins and products made from base of lupins","Molluscs and mollusc products"],
		"Drinks": [ "aqua", "Coca Cola"],
		"prezzo":17.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Lunedi","Giovedi"],
				"sconto":0.20
			},
			{"tipo":"orario",
				"valore":["19-21"],
				"sconto":0.1
			}]
		},
				{
		"menu": "milanese menu",
		"Appetizers": ["Polenta with deer"],
		"first": ["risotto alla milanese"],
		"seconds": ["cut to milan"],
		"Sweet": ["barbarjada"],
		"Allergens": ["Gluten-containing cereals", "Soy and soy products", "Milk and milk products", "Nuts", "Celery and celery products", "Molluscs and products made from molluscs "],
		"Drinks": [ "aqua", "Coca Cola", "coffee"],
		"prezzo":45.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Martedi","Mercoledi"],
				"sconto":0.50
			}]
		}]
	],
	"prenotazioni":[
						{"valore":"Lunedi","postiliberi":"0","ora":"19-21"},
						{"valore":"Lunedi","postiliberi":"0","ora":"21-23"},
						{"valore":"Martedi","postiliberi":"0","ora":"19-21"},
						{"valore":"Martedi","postiliberi":"3","ora":"21-23"},
						{"valore":"Mercoledi","postiliberi":"36","ora":"19-21"},
						{"valore":"Mercoledi","postiliberi":"36","ora":"21-23"},
						{"valore":"Giovedi","postiliberi":"36","ora":"19-21"},
						{"valore":"Giovedi","postiliberi":"36","ora":"21-23"},
						{"valore":"Venerdi","postiliberi":"36","ora":"19-21"},
						{"valore":"Venerdi","postiliberi":"36","ora":"21-23"},
						{"valore":"Sabato","postiliberi":"36","ora":"19-21"},
						{"valore":"Sabato","postiliberi":"36","ora":"21-23"},
						{"valore":"Domenica","postiliberi":"36","ora":"19-21"},
						{"valore":"Domenica","postiliberi":"36","ora":"21-23"}
					]
	},{
	"nome":"Ristorante da Mario",
	"tipologia":["braceria"],
	"via": "piazza emilio",
	"citta":"Bologna",
	"gps":{"lat":43.4886181,"long":10.2234561},
	"fascia_prezzo": "medio",  
	"review":3, 
	"posti":70,
	"menus":[[
		{
		"menu":"menu carne",
		"antipasti":["tagliere di salumi","tagliere di formaggi"],
		"primi":["ravioli al ragù","penne alla matriciana"],
		"secondi":["cotoletta","arrosticini","agnello"],
		"allergeni":["Latte e prodotti a base di latte","Frutta a guscio","Sedano e prodotti a base di sedano","Semi di sesamo e prodotti a base di semi di sesamo","Anidride solforosa e solfiti"],
		"bevande":["acqua","fanta"],
		"prezzo":34.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Martedi","Venerdi"],
				"sconto":0.90
			},
			{"tipo":"orario",
				"valore":["19-21"],
				"sconto":0.2
			}]
		},
		{
		"menu":"menu vegetariano",
		"antipasti":["verdure grigliate"],
		"primi":["pasta al pesto"],
		"secondi":["cotoletta di soia"],
		"dolci":["Tiramisù"],
		"allergeni":["Cereali contenenti glutine","Soia e prodotti a base di soia","Latte e prodotti a base di latte","Frutta a guscio","Semi di sesamo e prodotti a base di semi di sesamo","Anidride solforosa e solfiti","Lupini e prodotti a base di lupini"],
		"bevande":["acqua","coca-cola","caffe"],
		"prezzo":36.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Martedi","Venerdi"],
				"sconto":0.1
			}]
		}],[
		{
		"menu": "meat menu",
		"Appetizers": ["cold cuts", "cheesecake"],
		"first": ["ravioli al ragù", "penni alla matriciana"],
		"Seconds": ["cutlet", "kebabs", "lamb"],
		"Allergens": ["Milk and Milk Products", "Nuts", "Celery and Celery Products", "Sesame Seeds and Sesame Seeds", "Sulfuric Sulphide and Sulphides "],
		"Drinks": [ "aqua", "fanta"],
		"prezzo":34.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Martedi","Venerdi"],
				"sconto":0.90
			},
			{"tipo":"orario",
				"valore":["19-21"],
				"sconto":0.2
			}]
		},
		{
		"menu": "vegetarian menu",
		"Appetizers": ["grilled vegetables"],
		"first": ["pesto pesto"],
		"seconds": ["soybean"],
		"Sweet": ["Tiramisu"],
		"Allergens": ["Gluten-containing cereals", "Soya and soy products", "Milk and milk products", "Nuts", "Sesame seeds and sesame seed products" , "Sulphurous anhydride and sulphites", "Lupins and lupine products"],
		"Drinks": [ "aqua", "Coca Cola", "coffee"],
		"prezzo":36.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Martedi","Venerdi"],
				"sconto":0.1
			}]
		}]
	],
	"prenotazioni":[
						{"valore":"Lunedi","postiliberi":"0","ora":"19-21"},
						{"valore":"Lunedi","postiliberi":"0","ora":"21-23"},
						{"valore":"Martedi","postiliberi":"0","ora":"19-21"},
						{"valore":"Martedi","postiliberi":"0","ora":"21-23"},
						{"valore":"Mercoledi","postiliberi":"70","ora":"19-21"},
						{"valore":"Mercoledi","postiliberi":"70","ora":"21-23"},
						{"valore":"Giovedi","postiliberi":"70","ora":"19-21"},
						{"valore":"Giovedi","postiliberi":"70","ora":"21-23"},
						{"valore":"Venerdi","postiliberi":"70","ora":"19-21"},
						{"valore":"Venerdi","postiliberi":"36","ora":"21-23"},
						{"valore":"Sabato","postiliberi":"36","ora":"19-21"},
						{"valore":"Sabato","postiliberi":"36","ora":"21-23"},
						{"valore":"Domenica","postiliberi":"36","ora":"19-21"},
						{"valore":"Domenica","postiliberi":"36","ora":"21-23"}
					]
	},{
	"nome":"Pescheria",
	"tipologia":["pesce"],
	"via": "via rossi",
	"citta":"Lecco",
	"gps":{"lat":42.4886181,"long":13.2234561},
	"fascia_prezzo": "costoso",  
	"review":3, 
	"posti":55,
	"menus":[[
		{
		"menu":"menu pesce",
		"antipasti":["insalata di mare"],
		"primi":["pasta allo scoglio","linguine all'astice"],
		"secondi":["zuppa di cozze","fritto misto"],
		"allergeni":["Crostacei e prodotti a base di crostacei","Pesce e prodotti a base di pesce"],
		"bevande":["acqua","vino"],
		"prezzo":90.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Mercoledi"],
				"sconto":0.45
			},
			{"tipo":"orario",
				"valore":["21-23"],
				"sconto":0.2
			}]
		},
		{
		"menu":"menu bambini",
		"antipasti":["patatine fritte"],
		"primi":["pasta al sugo"],
		"secondi":["cotoletta alla milanese","bastoncini di pesce"],
		"dolci":["torta alle mele"],
		"allergeni":["Cereali contenenti glutine","Latte e prodotti a base di latte","Frutta a guscio"],
		"bevande":["acqua","coca-cola","fanta"],
		"prezzo":60.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Giovedi"],
				"sconto":0.35
			}]
		}],[
		{
		"menu": "fish menu",
		"Appetizers": ["sea salad"],
		"first": ["pasta alla roccia", "linguine alla stice"],
		"seconds": ["mussel soup", "mixed fried"],
		"Allergens": ["Crustaceans and crustaceans","Fish and fish products"],
		"Drinks": ["water", "wine"],
		"prezzo":90.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Mercoledi"],
				"sconto":0.45
			},
			{"tipo":"orario",
				"valore":["21-23"],
				"sconto":0.2
			}]
		},
		{
		"menu": "children menu",
		"Appetizers": ["french fries"],
		"first": ["pasta with gravy"],
		"seconds": ["milano cutlet", "fish sticks"],
		"sweet": ["apple pie"],
		"Allergens": ["Gluten-containing cereals", "Milk and milk products", "Nuts"],
		"Drinks": [ "aqua", "Coca Cola", "Fanta"],
		"prezzo":60.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Giovedi"],
				"sconto":0.35
			}]
		}]
	],
	"prenotazioni":[
						{"valore":"Lunedi","postiliberi":"10","ora":"19-21"},
						{"valore":"Lunedi","postiliberi":"30","ora":"21-23"},
						{"valore":"Martedi","postiliberi":"40","ora":"19-21"},
						{"valore":"Martedi","postiliberi":"50","ora":"21-23"},
						{"valore":"Mercoledi","postiliberi":"55","ora":"19-21"},
						{"valore":"Mercoledi","postiliberi":"55","ora":"21-23"},
						{"valore":"Giovedi","postiliberi":"55","ora":"19-21"},
						{"valore":"Giovedi","postiliberi":"55","ora":"21-23"},
						{"valore":"Venerdi","postiliberi":"55","ora":"19-21"},
						{"valore":"Venerdi","postiliberi":"36","ora":"21-23"},
						{"valore":"Sabato","postiliberi":"36","ora":"19-21"},
						{"valore":"Sabato","postiliberi":"36","ora":"21-23"},
						{"valore":"Domenica","postiliberi":"36","ora":"19-21"},
						{"valore":"Domenica","postiliberi":"36","ora":"21-23"}
					]
	},
	{
	"nome":"Sushi Restaurant",
	"tipologia":["sushi"],
	"via": "via moro",
	"citta":"Monza",
	"gps":{"lat":45.4885681,"long":8.4534561},
	"fascia_prezzo": "medio",  
	"review":3, 
	"posti":80,
	"menus":[[
		{
		"menu":"menu sashimi",
		"primi":["sashimi","tonno"],
		"secondi":["pesce palla","nigiri"],
		"allergeni":["Anidride solforosa e solfiti","Crostacei e prodotti a base di crostacei","Pesce e prodotti a base di pesce"],
		"bevande":["acqua","vino"],
		"prezzo":49.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Domenica","Lunedi"],
				"sconto":1.20
			},
			{"tipo":"orario",
				"valore":["19-21"],
				"sconto":0.3
			}]
		},
		{
		"menu":"menu ura-maki",
		"primi":["pesce spada"],
		"secondi":["ura-maki","roll di pesce"],
		"allergeni":["Cereali contenenti glutine","Soia e prodotti a base di soia","Latte e prodotti a base di latte","Frutta a guscio","Semi di sesamo e prodotti a base di semi di sesamo","Anidride solforosa e solfiti","Lupini e prodotti a base di lupini"],
		"bevande":["acqua","vino","tè"],
		"prezzo":55.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Martedi","Venerdi"],
				"sconto":0.1
			}]
		}],[
		{
		"menu": "sashimi menu",
		"Firsts": ["sashimi", "tuna"],
		"seconds": ["ball fish", "nigiri"],
		"Allergens": ["Sulphurous anhydride and sulphites", "Crustaceans and crustaceans", "Fish and fish products"],
		"Drinks": ["water", "wine"],
		"prezzo":49.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Domenica","Lunedi"],
				"sconto":1.20
			},
			{"tipo":"orario",
				"valore":["19-21"],
				"sconto":0.3
			}]
		},
		{
		"menu": "ura-maki menu",
		"first": ["swordfish"],
		"seconds": ["ura-maki", "fish roll"],
		"Allergens": ["Gluten-containing cereals", "Soya and soy products", "Milk and milk products", "Nuts", "Sesame seeds and sesame seed products" , "Sulphurous anhydride and sulphites", "Lupins and lupine products"],
		"Drinks": ["water", "wine", "tea"],
		"prezzo":55.00,
		"sconti":[{"tipo":"giorno",
				"valore":["Martedi","Venerdi"],
				"sconto":0.1
			}]
		}]
	],
	"prenotazioni":[
						{"valore":"Lunedi","postiliberi":"12","ora":"19-21"},
						{"valore":"Lunedi","postiliberi":"50","ora":"21-23"},
						{"valore":"Martedi","postiliberi":"80","ora":"19-21"},
						{"valore":"Martedi","postiliberi":"80","ora":"21-23"},
						{"valore":"Mercoledi","postiliberi":"70","ora":"19-21"},
						{"valore":"Mercoledi","postiliberi":"70","ora":"21-23"},
						{"valore":"Giovedi","postiliberi":"70","ora":"19-21"},
						{"valore":"Giovedi","postiliberi":"70","ora":"21-23"},
						{"valore":"Venerdi","postiliberi":"70","ora":"19-21"},
						{"valore":"Venerdi","postiliberi":"36","ora":"21-23"},
						{"valore":"Sabato","postiliberi":"36","ora":"19-21"},
						{"valore":"Sabato","postiliberi":"36","ora":"21-23"},
						{"valore":"Domenica","postiliberi":"36","ora":"19-21"},
						{"valore":"Domenica","postiliberi":"36","ora":"21-23"}
					]
	}
]