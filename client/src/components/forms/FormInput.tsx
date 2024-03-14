function FormInput({
    id,
    label,
    type,
    placeholder,
}: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
}) {
    return (
        <div>
            {label && (
                <label htmlFor="email" className="block mb-2">
                    {label}
                </label>
            )}

            <input
                type={type}
                placeholder={placeholder}
                className="w-full py-2 px-4 border border-zinc-300 rounded-md focus:outline-none focus:border-zinc-500"
            />

            <p className="text-red-500 text-sm">Email is required</p>
        </div>
    );
}

export default FormInput;
