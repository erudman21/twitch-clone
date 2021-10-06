import { Field, FormikErrors } from "formik";
import React, { BaseSyntheticEvent, useEffect } from "react";

interface BirthdateObject {
  month: number;
  day: string;
  year: string;
}

interface DOBInputProps {
  name: string;
  label?: string;
  error?: FormikErrors<BirthdateObject> | undefined;
  touched: boolean | undefined;
  values: BirthdateObject;
  setFieldError: (field: string, message: string | undefined) => void;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const DOBInput: React.FC<DOBInputProps> = ({
  label,
  name,
  error,
  setFieldValue,
  touched,
  values,
  setFieldError,
}) => {
  useEffect(() => {
    if (touched) {
      const date = parseInt(values.day);
      const daysInMonth = new Date(
        parseInt(values.year),
        parseInt("" + values.month) + 1,
        0
      ).getDate();

      if (date <= 0 || date > daysInMonth) {
        setFieldError("birthdate.day", "Please enter a valid date");
      }
    }
  }, [values, touched, setFieldError, error]);

  return (
    <div className="flex flex-col">
      <label className="capitalize mb-2 text-text-label" htmlFor={name}>
        {label}
      </label>
      <div className="flex overflow-auto space-x-4">
        <div className="w-full">
          <Field
            name="birthdate.month"
            as="select"
            aria-label="Select your birthday month"
            className="h-default-button-height bg-clip-padding border-solid border-2 text-text-input bg-nav-dots-background-hover border-nav-dots-background-hover cursor-pointer rounded-left-nav-bar block text-button-text py-2 pr-12 pl-4 w-full hover:border-search-box-hover focus:bg-black focus:border-button-hover focus:outline-none"
          >
            <option disabled value={-1}>
              Month
            </option>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </Field>
        </div>
        <div className="min-w-dob-date">
          <div className="relative">
            <Field
              name="birthdate.day"
              as="input"
              placeholder="Day"
              maxLength={2}
              onChange={(e: BaseSyntheticEvent) => {
                if (!isNaN(e.target.value)) {
                  setFieldValue("birthdate.day", e.target.value);
                }
              }}
              className="bg-clip-padding border-solid border-2 text-text-input bg-nav-dots-background-hover border-nav-dots-background-hover block rounded-left-nav-bar text-button-text py-2 px-4 w-full h-default-button-height hover:border-search-box-hover focus:bg-black focus:border-button-hover focus:outline-none"
            />
          </div>
        </div>
        <div className="min-w-dob-date">
          <div className="relative">
            <Field
              validate={(value: string) => {
                const year = parseInt(value);
                const currYear = new Date().getFullYear();

                if (year < currYear - 110 || year > currYear) {
                  return "Please enter a valid year";
                }
              }}
              onChange={(e: BaseSyntheticEvent) => {
                if (!isNaN(e.target.value)) {
                  setFieldValue("birthdate.year", e.target.value);
                }
              }}
              maxLength={4}
              name="birthdate.year"
              as="input"
              placeholder="Year"
              className="bg-clip-padding border-solid border-2 text-text-input bg-nav-dots-background-hover border-nav-dots-background-hover block rounded-left-nav-bar text-button-text py-2 px-4 w-full h-default-button-height hover:border-search-box-hover focus:bg-black focus:border-button-hover focus:outline-none"
            />
          </div>
        </div>
      </div>
      {touched && error && (
        <div className="text-red-400">{Object.values(error)[0]}</div>
      )}
    </div>
  );
};

export default DOBInput;
