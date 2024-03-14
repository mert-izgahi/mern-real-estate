import { useForm } from "react-hook-form";
import FormContainer from "./FormContainer";
import { z } from "zod";
import { profileInputSchema } from "../../validations";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./FormInput";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useUpdateMeMutation } from "../../redux/auth/api";
import toast from "react-hot-toast";

function ProfileForm() {
    const { user } = useSelector((state: any) => state.auth);
    const [updateMe, { isLoading }] = useUpdateMeMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<z.infer<typeof profileInputSchema>>({
        defaultValues: {
            name: "",
            password: "",
            bio: "",
        },
        resolver: zodResolver(profileInputSchema),
    });

    async function onSubmit(data: z.infer<typeof profileInputSchema>) {
        try {
            await updateMe(data).unwrap();
            toast.success("Profile updated successfully");
        } catch (error) {
            toast.error("Failed to update profile");
        }
    }

    useEffect(() => {
        if (user) {
            setValue("name", user.name);
            setValue("bio", user.bio);
        }
    }, [user]);

    return (
        <FormContainer>
            <form
                className="flex flex-col gap-8"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <FormInput
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="Name"
                    error={errors.name?.message}
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

                <FormInput
                    id="bio"
                    label="Bio"
                    type="textarea"
                    placeholder="Bio"
                    error={errors.bio?.message}
                    register={register}
                />

                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </FormContainer>
    );
}

export default ProfileForm;
