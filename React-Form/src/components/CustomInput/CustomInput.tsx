import { type Control, Controller, type FieldError, type FieldValues, type Path } from 'react-hook-form';
import './CustomInput.css'; // Assuming you have a CSS file for styling
interface CustomInputProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    error?: FieldError;
    label: string;
    type?: string;
}
export const CustomInput = <T extends FieldValues>({
    name,
    control,
    error,
    label,
    type
}: CustomInputProps<T>) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        id={name}
                        type={type ?? 'text'}
                        {...field}
                        className={`form-control ${error ? 'is-invalid' : ''}`}
                    />
                )}
            />
            {error && <p className="error">{error.message}</p>}
        </div>
    );
}