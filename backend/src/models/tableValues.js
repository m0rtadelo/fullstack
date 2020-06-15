// db.valueTables.aggregate([{$project:{name:1, items:{ $cond: { if: { $isArray: "$data" }, then: { $size: "$data" }, else: "NA"} }}}])
// db.valueTables.find({name:"countries"},{data:{$slice:[2,2]}})
