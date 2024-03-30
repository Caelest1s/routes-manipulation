import './style.css';

type Props = {
    text: string;
}

export default function ElementField({text}: Props) {
    return (
        <div className='rm-container-elementfield '>
            <h1>{text}</h1>
        </div>
    );
}