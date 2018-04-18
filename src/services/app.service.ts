class AppService{

    getUsers(){
        return fetch('http://iron-uber.herokuapp.com/paginated')
    }

    getUser(user_id: string){
        return fetch('https://iron-uber.herokuapp.com/apps/'+user_id)
    }

    updateUser(user: any){

    }

    addItnterview(interview: any){

    }

}

export const appService = new AppService();