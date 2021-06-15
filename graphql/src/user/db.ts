const people = [
  {
    id: 0,
    name: 'Peter',
    age: 36,
    gender: 'Male',
  },

  { id: 1, name: 'Grace', age: 34, gender: 'Female' },
];
class PeoPle {
  id: number;
  name: string;
  age: number;
  gender: string;
}
const getById = (id): PeoPle => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
export { people, getById };
