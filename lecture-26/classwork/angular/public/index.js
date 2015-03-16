var peopleList = angular.module("peopleList", [ ])

peopleList.controller("PeopleController", function(){

  this.people = [ 
    { name: 'Kyle', city: 'DC' }, 
    { name: 'John', city: 'Crystal City' }, 
    { name: 'Greg', city: 'Tysons' }, 
    { name: 'Aaron',  city: 'DC' }, 
    { name: 'Josh', city: 'DC' } 
  ]

})

