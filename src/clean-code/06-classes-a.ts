(() => {

    //No aplicando el principio de responabilidad unica




    type Gender = 'M'|'F';

    class Person {
       
        
        constructor(
            public name:string, 
            public gender: Gender,
            public birthdate: Date) {
           
        }
    }

    //El usuario tiene todas las caracteristicas de Person
    class User extends Person {

        public lastAccess: Date;

        constructor (
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usrr/home',
        '/home',
        'fredy@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('2002-05-30')
    );

    console.log({userSettings})




})();