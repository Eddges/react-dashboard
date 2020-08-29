const profileState = {
    profile : {
        basic : {
            name : "Jon Snow",
            email : "jonsnow@gmail.com",
            course : 'FullStack Web Development',
            gender : 'Male',
            DOJ : '10 Jul, 2020',
            add1 : 'King\'s room, Winterfell Palace',
            add2 : 'Kingdom of North, Westeros',
            progress : 70
        },
        professional : {
            company : 'Night\'s watch',
            experience : '2yr',
            position : 'King',
            location : 'Winterfell',
            job_details : 'Management of Winterfell',
            skills : ['JavaScript', 'React', 'Linux', 'Python', 'Docker', 'Ansible', 'Kubernetes', 'NodeJS']
        },
        programming : {
            hackerRank : 'www.hackerrank.com/jon-show',
            spoj : 'www.spoj.com/jon-show',
            topCoder : 'www.topcoder.com/jon-show',
            codeChef : 'www.codechef.com/jon-show',
            codeForces : 'www.codeforces.com/jon-show'
        },
        education : {
            college : 'BIT Mesra', 
            course : 'Computer Science & Engg',
            year : '3rd',
            semester : '7th'
        }
    }
    
}

const profileReducer = (state = profileState, action) => {

    switch(action.type) {
        case 'CHANGE' : 
            return{
                profile : {
                    ...state.profile,
                    basic : {
                        ...state.profile.basic,
                        gender : action.dataLoad.gender,
                        DOJ : action.dataLoad.DOJ,
                        add1 : action.dataLoad.add1,
                        add2 : action.dataLoad.add2
                    }
                }
            }
        case 'PROCHANGE' : 
            return{
                profile : {
                    ...state.profile,
                    professional : {
                        ...state.profile.professional,
                        company : action.payload.company,
                        experience : action.payload.experience,
                        position : action.payload.position,
                        location : action.payload.location,
                        job_details : action.payload.job_details,
                        skills : action.payload.skills.split(',')
                    }
                }
            }
        case 'PROGCHANGE' : 
            return{
                profile : {
                    ...state.profile,
                    programming : {
                        ...state.profile.programming,
                        hackerRank : action.payload.hackerRank,
                        spoj : action.payload.spoj,
                        topCoder : action.payload.topCoder,
                        codeChef : action.payload.codeChef,
                        codeForces : action.payload.codeForces
                    }
                }
            }
        
        case 'EDUCHANGE' : 
            return{
                profile : {
                    ...state.profile,
                    education : {
                        ...state.profile.education,
                        college : action.payload.college,
                        course : action.payload.course,
                        year : action.payload.year,
                        semester : action.payload.semester
                    }
                }
            }
    }


    return state
}

export default profileReducer