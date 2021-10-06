import { Form, Formik } from "formik";
import React, { Dispatch } from "react";
import { MeDocument, useLoginMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import TextInput from "../Form/TextInput";
import { AuthModalState } from "./ModalStateEnum";

interface AuthModalLoginFormProps {
  setModalState: Dispatch<React.SetStateAction<AuthModalState>>;
}

const AuthModalLoginForm: React.FC<AuthModalLoginFormProps> = ({
  setModalState,
}) => {
  const [login] = useLoginMutation({
    refetchQueries: [MeDocument],
  });

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const { data } = await login({
          variables: {
            loginInput: values,
          },
        });
        if (data?.login.errors) {
          setErrors(toErrorMap(data.login.errors));
        }

        if (data?.login.user) {
          setModalState(AuthModalState.NOT_ACTIVE);
        }
      }}
    >
      {({ isSubmitting, dirty, errors }) => (
        <Form className="space-y-8 mt-8">
          <TextInput name="username" autoFocus />
          <TextInput name="password" type="password" />
          <div>
            <button
              disabled={isSubmitting || !dirty}
              type="submit"
              className={`button-default flex mt-16 w-full relative ${
                dirty ? "button-default-enabled" : "button-default-disabled"
              }`}
            >
              Log In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthModalLoginForm;
