// Try and Catch (Error Handling)
let person = {
    firstName : "Tanish",
    lastName : "Singhal",

    // Getter
    get fullName()
    {
        return person.firstName + " " + person.lastName;
    },

    // Setter
    set fullName(value)
    {
        if(typeof value !== 'string')
        {
            throw "You must pass a string";
        }
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

console.log(person.fullName);
person.fullName = "Pratyush Singhal";
console.log(person.fullName);

try{
    person.fullname = "Pratyush Singhal";
    // person.fullName = true;
}
catch(e){
    console.log(e);
    // alert(e);
}
finally {
    console.log(person.fullName);
}