db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: 20026 });
db.resumoVoos.find(
  { 
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: 20026,
  }, {
       _id: 0, 
     },
).limit(1);
