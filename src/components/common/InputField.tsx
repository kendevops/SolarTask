import {
  UseFormRegister,
  FieldValues,
  Path,
  Controller,
  Control,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder: string;
  register: UseFormRegister<T>;
  error?: string;
  control?: Control<T>;
}

const InputField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  control,
}: InputFieldProps<T>) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-13 md:text-16 font-normal font-inter text-secondary mb-2">
        {label}
      </label>
      {type === "date" && control ? (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <div className="relative">
              <DatePicker
                placeholderText={placeholder}
                selected={field.value || null}
                onChange={(date: Date | null) => field.onChange(date)}
                dateFormat="dd MMMM yyyy"
                className="w-full text-secondary text-12 md:text-15 font-inter px-5 py-2 md:py-3 border border-borderPrimary rounded-xl placeholder:text-textSecondary md:rounded-2xl focus:border-secondary focus:outline-none"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer">
                <IoIosArrowDown className="w-5 h-5 text-gray-400" />
              </span>
            </div>
          )}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className="text-secondary text-12 md:text-15 font-inter px-5 py-2 md:py-3 border border-borderPrimary rounded-xl placeholder:text-textSecondary md:rounded-2xl focus:border-secondary focus:outline-none"
        />
      )}
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default InputField;
