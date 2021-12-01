import react from "react";

export const LocationCard = (locations) => (
    <section className="location">
        <div>${locations.address}</div>
        <div>${locations.sqrFtg}</div>
        <div>${locations.handicap}</div>
    </section>
)
