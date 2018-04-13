class AppService{

    getUsers(){
        fetch('http://iron-uber.herokuapp.com/paginated')
    }

    getUser(user_id: string){
        fetch('https://iron-uber.herokuapp.com/apps/'+user_id)
    }

    updateUser(user: any){

    }

    addItnterview(interview: any){

    }

}

export const appService = new AppService();