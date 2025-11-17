import Offered from "./Offered/Offered";
import Service from "./Services/Service";

export default function Menu() {
  return (
    <>
      <main style={{ marginTop: "80px" }}>
        <Offered />
        <Service />
      </main>
    </>
  );
}
