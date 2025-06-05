import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { CustomInput } from '..';

const Schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters"),

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match", path: ["confirmPassword"]
});

type FormValues = z.infer<typeof Schema>;



export const CustomForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(Schema),
        mode: 'onBlur', // Validate on blur
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });
    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log("Form submitted successfully:", data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >

            <CustomInput<FormValues> name='name' label='Nombre' control={control} error={errors.name} />
            <CustomInput<FormValues> name='email' label='Email' control={control} error={errors.email} type='email' />
            <CustomInput<FormValues> name='password' label='Password' control={control} error={errors.password} type='password' />
            <CustomInput<FormValues> name='confirmPassword' label='Confirm Password' control={control} error={errors.confirmPassword} type='password' />

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}