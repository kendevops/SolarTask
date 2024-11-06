import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import profileImg from "../assets/profile.png";
import InputField from "./common/InputField";
import ImageUpload from "./common/ImageUpload";

const profileSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  userName: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  dateOfBirth: z.date().nullable().optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),
  postalCode: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });
  const [profileImage, setProfileImage] = useState<string>(profileImg);

  const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
    console.log(data);
  };

  const handleImageChange = (imageFile: File) => {
    console.log("Uploaded Image File: ", imageFile);
    setProfileImage(URL.createObjectURL(imageFile));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row lg:gap-10"
    >
      <div className="flex items-center justify-center md:items-start md:justify-start mb-4 md:mx-10">
        <ImageUpload
          imageUrl={profileImage}
          onImageChange={handleImageChange}
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
        <InputField
          label="Your Name"
          name="name"
          placeholder="Charlene Reed"
          register={register}
          error={errors.name?.message}
        />
        <InputField
          label="User Name"
          name="userName"
          placeholder="Charlene Reed"
          register={register}
          error={errors.userName?.message}
        />
        <InputField
          label="Email"
          name="email"
          placeholder="charlenereed@gmail.com"
          type="email"
          register={register}
          error={errors.email?.message}
        />
        <InputField
          label="Password"
          name="password"
          placeholder="**********"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <InputField
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          placeholder="25 January 1990"
          register={register}
          control={control} // Pass control prop
          error={errors.dateOfBirth?.message}
        />
        <InputField
          label="Present Address"
          name="presentAddress"
          placeholder="San Jose, California, USA"
          register={register}
          error={errors.presentAddress?.message}
        />
        <InputField
          label="Permanent Address"
          name="permanentAddress"
          placeholder="San Jose, California, USA"
          register={register}
          error={errors.permanentAddress?.message}
        />
        <InputField
          label="City"
          name="city"
          placeholder="San Jose"
          register={register}
          error={errors.city?.message}
        />
        <InputField
          label="Postal Code"
          name="postalCode"
          type="number"
          placeholder="45962"
          register={register}
          error={errors.postalCode?.message}
        />
        <InputField
          label="Country"
          name="country"
          placeholder="USA"
          register={register}
          error={errors.country?.message}
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-8 py-2 bg-secondary text-white rounded-lg hover:bg-black hover:text-primary"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
