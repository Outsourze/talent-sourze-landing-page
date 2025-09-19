// components/DatePickerInput.js
import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerInput({
  label,
  name,
  control,
  rules = {},
  error,
  required = false,
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium mb-1 text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="w-full rounded-md border p-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 cursor-pointer">
        <Controller
          name={name}
          control={control}
          rules={{
            required: required ? `${label || "This field"} is required` : false,
            ...rules,
          }}
          render={({ field }) => (
            <DatePicker
              id={name}
              selected={field.value ? new Date(field.value) : null}
              onChange={(date) =>
                field.onChange(date ? date.toISOString().split("T")[0] : null)
              }
              minDate={new Date()} // prevents past dates
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
              className="w-full bg-transparent focus:outline-none cursor-pointer"
              showPopperArrow={false}
            />
          )}
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
