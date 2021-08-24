class Support {
        name;
        constructor(name, address) {
                this.name = name;
                this.address = address;
        }
        address = 'BD';
        designation = 'Support Web Developer';
        startSession() {
                console.log(this.name, 'Start a Support Session');
        }
}
const aamir = new Support('Amir', 'BD');
console.log(aamir);
const salman = new Support('Salman', 'Dubai');
console.log(salman);

aamir.startSession()