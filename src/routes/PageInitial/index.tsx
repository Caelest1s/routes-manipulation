import ButtonPrimary from "../../components/ButtonPrimary";
import ElementField from "../../components/ElementField";
import Header from "../../components/Header";

export default function PageInitial() {
    return (
        <>
            <Header />
            <ElementField text={"Página Inicial"}/>
            <ButtonPrimary text={"Ver promoção"} />
        </>
    );
}