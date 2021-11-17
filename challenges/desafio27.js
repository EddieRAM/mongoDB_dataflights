db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });
db.resumoVoos.find({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 }, { _id: 0 }).limit(1);
