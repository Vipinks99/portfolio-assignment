import { apiLoadingSubject, DashboardStore } from "../Store";


export const fetchGeocodeData = () => {
  
    const url = 'https://geocode.maps.co/search?q=Sector%2062%20,%20Noida&api_key=66a225fea6c1f755105031ulr3a6811'

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Setting data in the store
        DashboardStore.setData(data)
        // Setting Data event is fired or published here
        apiLoadingSubject.next({
          apiCallState: 'LOADING_SUCCESS',
          eventType: 'DASHBOARD_DATA',
          data: data,
        })
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
};
