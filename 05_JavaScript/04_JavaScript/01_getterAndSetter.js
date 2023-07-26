// GETTER SETTER
// Getter => access the properties
// Setter => change or update the properties

let person = {
    fName: 'Tanish',
    lName: 'Singhal',
    
    get fullName() {
        return (`${person.fName} ${person.lName}`);

    },

    set fullName(value) {
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};


function fullName2() {
    return (`${person.fName}    ${person.lName}`);
}
// issue with this is I only can read it
fullName2();


console.log();


console.log(person.fullName);
person.fullName = "Pratyush Signhal";
console.log(person.fullName);