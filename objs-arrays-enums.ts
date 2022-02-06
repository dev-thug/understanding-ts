
enum Role { ADMIN = 5, READ_ONLY, AUTHOR};
const person = {
  name: "Hyunjoong Kim",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR
};


let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR){
    console.log('is Author')
    
}