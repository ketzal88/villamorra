import { useParams } from "react-router-dom";
import { getApartment } from "../data";

export default function Apartment() {
    let params = useParams();
    let apartment = getApartment(parseInt(params.apartmentId, 10));
    return <h2>Apartment: {params.apartmentId}</h2>;
  }
