import * as yup from "yup";

export const schemaRegister = yup.object({
    username: yup.string()
      .required('The username is required'),
    email: yup.string()
      .required('The email is required')
      .email('The email is not valid'),
    password: yup.string()
      .required('The password is required')
      .min(8, 'Minimum 8 characters'),
    image: yup.mixed()
      .required("Please select an image.")
      .test("type", "Only the following formats are accepted: .jpg, .bmp, .webp and .png", (value) => {
        return value && (
            value.type === "image/jpeg" ||
            value.type === "image/bmp" ||
            value.type === "image/png" ||
            value.type === 'image/webp' 
        );
    }),
  });

export const schemaLogin = yup.object({
    email: yup.string()
      .required('The email is required'),
    password: yup.string()
      .required('The password is required')
  });