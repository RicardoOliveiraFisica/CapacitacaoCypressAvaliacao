import { faker } from '@faker-js/faker';

export function criarRegistroUsuario() {
  return {
    
    gender: faker.helpers.arrayElement(['Mr', 'Mrs']),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 8 }),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    country: faker.helpers.arrayElement(['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    phone: faker.phone.number(),
    day: faker.date.birthdate({ min: 1, max: 31, mode: 'age' }).getDate(),
    month: faker.date.month(),
    year: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).getFullYear().toString(),
  };
}