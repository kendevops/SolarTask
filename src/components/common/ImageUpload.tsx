import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

interface ImageUploadProps {
  imageUrl: string;
  onImageChange: (imageFile: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  imageUrl,
  onImageChange,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(imageUrl);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  return (
    <div className="relative w-24 h-24">
      <img
        src={previewUrl}
        alt="Profile"
        className="w-full h-full rounded-full object-cover"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="imageUploadInput"
      />
      <label
        htmlFor="imageUploadInput"
        className="absolute bottom-0 right-0 bg-secondary text-white rounded-full p-2 cursor-pointer"
      >
        <FaPencilAlt className="w-4 h-4" />
      </label>
    </div>
  );
};

export default ImageUpload;
