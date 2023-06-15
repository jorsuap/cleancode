(() => {

    //Priorizar la composicion frente a la herencia

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
        email    : string;
        role     : string;
    }

    class User {

        public email     : string;
        public role      : string;
        public lastAccess: Date;

        constructor({email, role }:UserProps) {
 
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder  : string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor(
            {
            lastOpenFolder,
            workingDirectory}:SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
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

    class UserSettings {
      public person  :Person;
      public user    :User;
      public settings:Settings

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
            this.person = new Person({name,birthdate, gender});
            this.user   = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory})
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

    console.log(userSettings);
})();