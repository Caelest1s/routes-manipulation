import { Link } from "react-router-dom";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ElementField from "../../../components/ElementField";

export default function Subscription() {
    return (
        <>
            <h1>Faça sua inscrição !</h1>
            <ElementField text={"Página de inscrição!"} />
            <Link to="/promotion">
                <ButtonPrimary text={"Ver promoção"} />
            </Link>
        </>
    );
}