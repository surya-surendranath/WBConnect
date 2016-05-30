exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('userInfo').del(),

    knex('userInfo').insert({id: 1, first_name: "surya",last_name:"surendranath",password:"surya",email:"surya.snath08@gmail.com",current_location:"wellington",birth_place:"kochi",designation:"student",gender:"female",Marriagestatus:"married",date_of_birth:"8/11/1989",image:"../images/img1.jpeg"}),
   knex('userInfo').insert({id: 2, first_name: "niya",last_name:"rajeev",current_location:"wellington",password:"niya",email:"surya.snath08@gmail.com",birth_place:"kochi",designation:"student",gender:"female",Marriagestatus:"married",date_of_birth:"8/11/1985",image:"../images/img3.jpeg"})


);
};
    // Inserts seed entries
