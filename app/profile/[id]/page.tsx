import MapComponent from "@/components/ui/Map/Map";
import styles from "./profileId.module.css";

interface IProfile {
  params: any;
}

const fetchTrips = () => {
  return fetch("http://localhost:4000/api/v1/trips", {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function Profile({ params }: IProfile) {
  const trips = await fetchTrips();
  const { id } = params;
  return (
    <div className={styles.container}>
      <aside className={styles.profileMenu}>
        {`My trips ${id}`}
        <ul>
          {trips.map(({ name }: { name: string }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </aside>
      <main className={styles.mainContent}>
        <div className={styles.mapContainer}>
          <MapComponent />
        </div>
      </main>
    </div>
  );
}
