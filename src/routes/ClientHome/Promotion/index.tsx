import { Link } from "react-router-dom";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ElementField from "../../../components/ElementField";

export default function Promotion() {
    return (
        <>
            <ElementField text={"Página de promoção"} />
            <Link to="/subscription">
                <ButtonPrimary text={"Quero participar"} />
            </Link>
        </>
    );
}