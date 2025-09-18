import axios from "axios";
import { useForm } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";

const ContactForm = ({ selectedJob, setSelectedJob, sectorId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = new FormData();
      Object.entries(data).forEach(([key, value]) =>
        payload.append(key, value)
      );

      // append custom fields (not from the form)
      payload.append("jobId", selectedJob?.id);
      payload.append("sectorId", sectorId);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API}/candidate/apply`,
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log({ res });
      reset();
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl bg-white w-full py-10 m-auto flex flex-col items-start justify-between px-6 md:px-12 lg:px-16 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Application for <span className="brand-text-blue">{selectedJob.title}</span>
        </h1>
        <IoCloseOutline
          onClick={() => setSelectedJob({ id: null, title: "" })}
          className="cursor-pointer text-gray-600 hover:text-red-500"
          size={36}
        />
      </div>

      <p className="text-gray-600 mb-6">
        Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full"
      >
        {/* --- Section: Personal Info --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                Full Name *
              </label>
              <input
                {...register("fullName", { required: "Full name is required" })}
                placeholder="John Doe"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="john@mail.com"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone *
              </label>
              <input
                {...register("phone", { required: "Phone is required" })}
                placeholder="+1 234 567 890"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            {/* DOB */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="dateOfBirth">
                Date of Birth *
              </label>
              <input
                type="date"
                {...register("dateOfBirth", { required: "Date of Birth is required" })}
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* --- Section: Location & Gender --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Location</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="country">
                Country *
              </label>
              <input
                {...register("country", { required: "Country is required" })}
                placeholder="United States"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="city">
                City *
              </label>
              <input
                {...register("city", { required: "City is required" })}
                placeholder="New York"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="gender">
                Gender (optional)
              </label>
              <select {...register("gender")} className="w-full rounded-md border p-2 bg-white">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not">Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Section: Education & Experience --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Education & Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="educationBackground">
                Education Background *
              </label>
              <input
                {...register("educationBackground", { required: "Education is required" })}
                placeholder="B.Sc. in Computer Science"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="yearsOfExperience">
                Years of Experience *
              </label>
              <input
                type="number"
                {...register("yearsOfExperience", { required: "Experience is required" })}
                placeholder="5"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* --- Section: Job Details --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="expectedSalary">
                Expected Salary *
              </label>
              <input
                {...register("expectedSalary", { required: "Salary is required" })}
                placeholder="$50,000"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="availabilityDate">
                Availability Date *
              </label>
              <input
                type="date"
                {...register("availabilityDate", { required: "Availability date is required" })}
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* --- Section: Resume --- */}
        {/* <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Attachments</h2>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="resume">
              Resume / CV Upload *
            </label>
            <input
              type="file"
              {...register("resume", { required: "Resume is required" })}
              className="w-full rounded-md border p-2 bg-white"
            />
          </div>
        </div> */}

        {/* --- Section: Links --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="linkedInProfile">
                LinkedIn Profile
              </label>
              <input
                {...register("linkedInProfile")}
                placeholder="https://linkedin.com/in/username"
                className="w-full rounded-md border p-2 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="portfolioUrl">
                Portfolio / Website
              </label>
              <input
                {...register("portfolioUrl")}
                placeholder="https://myportfolio.com"
                className="w-full rounded-md border p-2 bg-white"
              />
            </div>
          </div>
        </div>

        {/* --- Section: Cover Letter --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Cover Letter</h2>
          <textarea
            {...register("additionalMessage")}
            placeholder="Write your cover letter here..."
            className="w-full rounded-md border p-3 bg-white h-32 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 transition px-10 py-3 text-white rounded-lg font-medium disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Send Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
