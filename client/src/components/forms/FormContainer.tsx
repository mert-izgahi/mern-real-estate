function FormContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-md mx-auto bg-zinc-200 p-8 rounded-md">
            {children}
        </div>
    );
}

export default FormContainer;
