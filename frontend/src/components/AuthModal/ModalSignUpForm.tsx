import { Form, Formik } from "formik";
import React, { Dispatch } from "react";
import { MeDocument, useRegisterMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import DOBInput from "../Form/DOBInput";
import TextInput from "../Form/TextInput";
import { SignUpSchema } from "./AuthSchemas";
import { AuthModalState } from "./ModalStateEnum";

interface AuthModalSignupFormProps {
  setModalState: Dispatch<React.SetStateAction<AuthModalState>>;
}

const AuthModalSignupForm: React.FC<AuthModalSignupFormProps> = ({
  setModalState,
}) => {
  const buttonStylesEnabled =
    "bg-button-primary-default hover:bg-button-primary-hover";
  const buttonStylesDisabled =
    "bg-search-button text-search-button-disabled cursor-not-allowed";

  const [register] = useRegisterMutation({
    refetchQueries: [MeDocument],
  });

  return (
    <Formik
      validationSchema={SignUpSchema}
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        birthdate: {
          month: -1,
          day: "",
          year: "",
        },
      }}
      onSubmit={async (
        { username, password, email, birthdate },
        { setErrors }
      ) => {
        const { data } = await register({
          variables: {
            registerInput: {
              username,
              password,
              email,
              birthdate: new Date(
                parseInt(birthdate.year),
                birthdate.month,
                parseInt(birthdate.day)
              ),
            },
          },
        });
        if (data?.register.errors) {
          setErrors(toErrorMap(data.register.errors));
        }
        if (data?.register.user) {
          setModalState(AuthModalState.NOT_ACTIVE);
        }
      }}
    >
      {({ isSubmitting, dirty, errors, touched, values, ...props }) => (
        <Form className="space-y-8 mt-8">
          <TextInput name="username" autoFocus />
          <TextInput name="password" type="password" />
          <TextInput
            name="confirmPassword"
            label="confirm password"
            type="password"
          />
          <DOBInput
            name="birthdate"
            label="date of birth"
            error={errors.birthdate}
            touched={
              touched.birthdate?.day &&
              touched.birthdate?.year &&
              touched.birthdate?.month
            }
            values={values.birthdate}
            {...props}
          />
          <TextInput name="email" type="email" />
          <div>
            <button
              disabled={isSubmitting || !dirty}
              type="submit"
              className={`flex capitalize mt-16 h-default-button-height w-full rounded-left-nav-bar overflow-hidden relative items-center justify-center align-middle ${
                dirty ? buttonStylesEnabled : buttonStylesDisabled
              }`}
            >
              Sign Up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthModalSignupForm;
