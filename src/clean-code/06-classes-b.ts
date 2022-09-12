(() => {

    //No aplicando el principio de responabilidad unica


    type Gender = 'M'|'F';

    //Crear interfaz
    interface PersonProps {
         name:string;
         gender: Gender;
         birthdate: Date;
    }

    class Person {

        public birthdate: Date;
        public name: string;
        public gender: Gender;

        constructor({name,gender,birthdate} : PersonProps){
           this.name = name;
           this.gender = gender;
           this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    //El usuario tiene todas las caracteristicas de Person
    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor (
            {email,
            role,
            name,
            gender,
            birthdate,}
        ):UserProps {
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends User {
        
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
           { workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate} : UserSettingsProps
        ){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings(
       { workingDirectory: '/usrr/home',
       lastOpenFolder: '/home',
        email: 'fredy@google.com',
       role: 'Admin',
       name: 'Fernando',
       gender: 'M',
       birthdate: new Date('2002-05-30')}
    );

    
    console.log({userSettings})




})();