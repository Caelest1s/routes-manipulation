import { Link } from "react-router-dom";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ElementField from "../../../components/ElementField";

export default function Welcome() {
    return (
        <>
            <ElementField text={"Página Inicial"} />
            <Link to="/promotion">
                <ButtonPrimary text={"Ver promoção"} />
            </Link>
        </>
    );
}