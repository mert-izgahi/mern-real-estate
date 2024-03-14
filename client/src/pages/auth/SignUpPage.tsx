import FormInput from "../../components/forms/FormInput";
import { Link } from "react-router-dom";

function SignUpPage() {
    return (
        <div className="py-12">
            <div className="flex items-center justify-center mb-12">
                <h1 className="text-3xl">SignIn to your account</h1>
            </div>
            <div className="max-w-md mx-auto bg-zinc-200 p-8 rounded-md">
                <form className="flex flex-col gap-4 mb-8">
                    <FormInput
                        id="name"
                        label="Full Name"
                        type="text"
                        placeholder="Full Name"
                    />
                    <FormInput
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                    />

                    <FormInput
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                    />

                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                </form>

                <div className="flex items-center justify-between">
                    <p>Don't have an account?</p>
                    <Link to="/auth/sign-up" className="ml-2">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
