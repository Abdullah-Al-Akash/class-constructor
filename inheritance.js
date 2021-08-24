class TeamMember {
        name;
        constructor(name, address) {
                this.name = name;
                this.address = address;
        }
        address = 'BD';

}

class Support extends TeamMember {
        designation = 'Support Web Developer';
        groupSupportTime;
        constructor(name, address, time) {
                super(name, address)
                this.groupSupportTime = time
        }
        startSession() {
                console.log(this.name, 'Start a Support Session');
        }
}

class studentCare {
        name;
        address = 'BD';
        designation = 'Student Care Web Developer';
        constructor(name, address) {
                this.name = name;
                this.address = address;
        }
        buildARoutine(student) {
                console.log(this.name, 'Build a Routine for', student, '.');
        }
}

class NeptuneDev extends TeamMember {

        constructor(name, address, editor) {
                super(name, address);
                this.editor = editor;
        }
        designation = 'Neptune App Developer';
        releaseApp(version) {
                console.log(this.name, 'Release App Version:', version, '.');
        }
}

const ash = new NeptuneDev('ASH', 'Dhaka', 'Android Studio');
console.log(ash);
ash.releaseApp('1.1.4')

const alia = new studentCare('Alia Bhaat', 'Mumbai');
// console.log(alia);

const aamir = new Support('Amir', 'BD', 11);
// console.log(aamir);
const salman = new Support('Salman', 'Dubai');
// console.log(salman);

// aamir.startSession()