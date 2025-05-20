import "./CustomButton.css";

interface Props {
    label: string;
    parentMethod: () => void;

}

export const CustomButton = ({ label, parentMethod }: Props) => {
    return (
        <button
            className='custom-button'
            onClick={parentMethod}
        >
            {label}
        </button>
    );
}