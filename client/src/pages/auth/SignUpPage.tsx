import FormInput from "../../components/forms/FormInput";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpInputSchema } from "../../validations";
import { zodResolver } from "@hookform/resolvers/zod";

function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof signUpInputSchema>>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },

        resolver: zodResolver(signUpInputSchema),
    });

    function onSubmit(data: z.infer<typeof signUpInputSchema>) {
        console.log(data);
    }

    return (
        <div className="py-12">
            <div className="flex items-center justify-center mb-12">
                <h1 className="text-3xl">SignIn to your account</h1>
            </div>
            <div className="max-w-md mx-auto bg-zinc-200 p-8 rounded-md">
                <form
                    className="flex flex-col gap-4 mb-8"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <FormInput
                        id="name"
                        label="Full Name"
                        type="text"
                        placeholder="Full Name"
                        error={errors.name?.message}
                        register={register}
                    />
                    <FormInput
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        error={errors.email?.message}
                        register={register}
                    />

                    <FormInput
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        error={errors.password?.message}
                        register={register}
                    />

                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                </form>

                <div className="flex items-center justify-between">
                    <p>Already have an account?</p>
                    <Link to="/auth/sign-in" className="ml-2">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
