import { BehaviorSubject } from "rxjs";

// instead of Redux I had used its alternative RxJs which uses Pub-Sub Model to
//  fire and Captures event and get data when needed
export const apiLoadingSubject = new BehaviorSubject('NONE');

export const newApiLoadingSubject = new BehaviorSubject({
    apiCallState: 'NONE',
    eventType: 'NONE',
    data: undefined
});

// Store for Dashboard Data 
var dashboardData = [] ;
export const DashboardStore = {
    setData : (data) => {
        dashboardData = data ;
    },
    getData : () => {
        return dashboardData ;
    }
}