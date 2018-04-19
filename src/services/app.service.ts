class AppService{

    course_data: any[] = [
        {
            month: 'January',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 34
                },
                {
                    course: 'Part time',
                    quantity: 16
                },
                {
                    course: 'Full time',
                    quantity: 84
                }
            ]
        },
        {
            month: 'February',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 26
                },
                {
                    course: 'Part time',
                    quantity: 67
                },
                {
                    course: 'Full time',
                    quantity: 34
                }
            ]
        },
        {
            month: 'March',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 6
                },
                {
                    course: 'Part time',
                    quantity: 1
                },
                {
                    course: 'Full time',
                    quantity: 54
                }
            ]
        },
        {
            month: 'April',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 23
                },
                {
                    course: 'Part time',
                    quantity: 16
                },
                {
                    course: 'Full time',
                    quantity: 14
                }
            ]
        },
        {
            month: 'May',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 23
                },
                {
                    course: 'Part time',
                    quantity: 17
                },
                {
                    course: 'Full time',
                    quantity: 37
                }
            ]
        },
        {
            month: 'June',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 23
                },
                {
                    course: 'Part time',
                    quantity: 82
                },
                {
                    course: 'Full time',
                    quantity: 44
                }
            ]
        },
        {
            month: 'July',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 3
                },
                {
                    course: 'Part time',
                    quantity: 93
                },
                {
                    course: 'Full time',
                    quantity: 54
                }
            ]
        },
        {
            month: 'August',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 23
                },
                {
                    course: 'Part time',
                    quantity: 1
                },
                {
                    course: 'Full time',
                    quantity: 34
                }
            ]
        },
        {
            month: 'September',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 23
                },
                {
                    course: 'Part time',
                    quantity: 12
                },
                {
                    course: 'Full time',
                    quantity: 34
                }
            ]
        },
        {
            month: 'October',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 243
                },
                {
                    course: 'Part time',
                    quantity: 22
                },
                {
                    course: 'Full time',
                    quantity: 84
                }
            ]
        },
        {
            month: 'November',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 223
                },
                {
                    course: 'Part time',
                    quantity: 152
                },
                {
                    course: 'Full time',
                    quantity: 374
                }
            ]
        },
        {
            month: 'December',
            courses: [
                {
                    course: 'UX/UI',
                    quantity: 235
                },
                {
                    course: 'Part time',
                    quantity: 312
                },
                {
                    course: 'Full time',
                    quantity: 304
                }
            ]
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