class AppService{

    course_data: any[] = [
        {
            month: 'January',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'February',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'March',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'April',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'May',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'June',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'July',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'August',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'September',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'October',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'November',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        },
        {
            month: 'December',
            ux_ui: 23,
            part_time: 12,
            full_time: 34
        }
    ];

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

    getApplicantsByCourse(){
        return this.course_data;
    }

}

export const appService = new AppService();