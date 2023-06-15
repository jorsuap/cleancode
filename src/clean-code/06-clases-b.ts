(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate:  Date;
        gender:     Gender; 
        name:       string; 
    }

    class Person {

        public birthdate:  Date;
        public gender:     Gender; 
        public name:       string; 

        constructor({name, gender, birthdate}:PersonProps){
            this.birthdate = birthdate
            this.gender =    gender;
            this.name =      name;
        }
    }

    interface UserProps {
        birthdate: Date;
        email    : string;
        gender   : Gender;
        name     : string;
        role     : string;
    }

    class User extends Person {

        public email     : string;
        public role      : string;
        public lastAccess: Date;

        constructor({ birthdate, email, gender, role, name }:UserProps) {
 
            super( {name, gender, birthdate} );
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor(
            {
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory}:UserSettingsProps
        ) {
            super({email, role, name, gender, birthdate} );
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings(
        {
        lastOpenFolder:'/home',
        workingDirectory:'/usr/home',
        role:'Admin',
        email:'fernando@google.com',
        gender:'M',
        name:'Fernando',
        birthdate: new Date('1985-10-21')
    }
    );

    console.log({ userSettings });


})();