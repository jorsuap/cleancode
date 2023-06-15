(()=>{
    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    // Alto Acoplamiento

    class Person {
        constructor(
            public firtsname: string,
            public lastname: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            firtsname: string,
            lastname: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(firtsname,lastname, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastFolderOpen: string,
        email     : string,
        role      : string,
        firtsname : string,
        lastname  : string,
        gender    : Gender,
        birthdate : Date,
    ){
        super(
            email,
            role,
            new Date(),
            firtsname,
            lastname,
            gender,
            birthdate
        )
    }
}
    


    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'fernando@google.com',
        'F',
        'Fernando',
        'suarez',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()