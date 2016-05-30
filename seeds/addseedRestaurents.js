exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('Restaurents').del(),

knex('Restaurents').insert({id: 1, name: "Masala Express",address:"1/180 Lambton Quay",description:"Our comfortable lounge style setting and warm atmosphere will ensure you a great night out on the Courtney Place Strip.",Reviews:"****"}),
knex('Restaurents').insert({id: 2, name: "Chilli Masala",address:"458 High Street Lower hutt",description:"Chilli Masala is a fully licensed sit down restaurant in Lower Hutt featuring award-winning Indian cuisine.",Reviews:"***"}),
knex('Restaurents').insert({id: 3, name: "Tulsi",address:"135 Cuba Street",description:"We have voted the best buttor chicken in wellington",Reviews:"****"}),
knex('Restaurents').insert({id: 4, name: "Curry Planet",address:"22 hugley street Poriru",description:"the best Indian restaurant in Porirua and coming second to the Great India in Wellington.",Reviews:"****"}),
knex('Restaurents').insert({id: 5, name: "BLounge",address:"340 Jackson Street Lower hutt",description:"A vegetrian rice speciality cooked with fresh vegetables and spices",Reviews:"******"})
);
};
    // Inserts seed entries
