(() => {


    const temperaturesCelcius = [33.6, 12.34];

 
    const ipServerAddress = '123.123.123.123';


    const listUser = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const emails = listUser.map( user => user.email );


    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const startTime = new Date().getTime();

    const endDate = new Date().getTime() - startTime;


    function getBook() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }

    function calculateAreaCuadrado( lado: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }

})();