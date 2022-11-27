const faker = require ('@faker-js/faker');
const fs = require('fs');

function generateUser(){
    for (let id=1;id <=100; id++){
        const user=faker.internet.username();
        const pass=faker.internet.password();
        const name=faker.name.firstName() + faker.name.lastname();
        const bio = faker.name.jobDescriptor();
    }

}
