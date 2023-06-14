(() => {

    function getMoviebyId( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieActorById( id: string ) {
        console.log({ id });
    }

    function getBioActorById( ActorId: string ) {
        console.log({ ActorId });
    }
    interface movie {
        cast:           string[];
        description:    string;
        rating:         number;
        title:          string;
    }
    
    // Crear una película
    function createMovie({title, description, rating, cast}:movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        if ( isDead ) return 1500;
      
        if ( isSeparated ) return 2500;
   
        return isRetired ? 3000 : 4000;
    }

    


})();
