import './style.css';

type Props = {
    text: string;
}

export default function ButtonPrimary({text}: Props) {
    return(
        <div className="rm-btn-primary">
            {text}
        </div>
    );
}