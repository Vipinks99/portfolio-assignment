import React, { useEffect, useState } from "react";
import { fetchGeocodeData } from "../../services/geoCodeService";
import { apiLoadingSubject, DashboardStore } from "../../Store";
import "./Dashboard.css";
import Card from "../Card";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);

  const getData = () => {

    // calling geoCodeData Api
    fetchGeocodeData();

    // getting data by subscribing or capturing the event
    const subscriber = apiLoadingSubject.subscribe((response) => {
      if (
        response.eventType === "DASHBOARD_DATA" &&
        response.apiCallState === "LOADING_SUCCESS"
      ) {
        setDashboardData(DashboardStore.getData());
      }
    });

    return subscriber;
  };

  useEffect(() => {
    
    const dashboardSubscriber = getData();

    // unmounting the service after getting data
    return () => {
      dashboardSubscriber.unsubscribe();
    };

  }, []);

  return (
    <section className="dashboard-content">
      {dashboardData.map((item, index) => {
        return (
          <Card
            id={index}
            placeId={item.place_id}
            address={item.display_name}
            latitude={item.lat}
            longitude={item.lon}
            type={item.type}
          />
        );
      })}
    </section>
  );
};

export default Dashboard;
