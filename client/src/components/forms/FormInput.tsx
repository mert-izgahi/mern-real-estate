function FormInput({
    id,
    label,
    type,
    placeholder,
    error,
    register,
}: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    error?: string;
    register: any;
}) {
    return (
        <div>
            {label && (
                <label htmlFor="email" className="block mb-2">
                    {label}
                </label>
            )}

            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                className="w-full py-2 px-4 border border-zinc-300 rounded-md focus:outline-none focus:border-zinc-500"
                {...register(id)}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}

export default FormInput;
