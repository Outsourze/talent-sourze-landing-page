import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";

const EmployerForm = ({
  isFormOpen,
  setIsFormOpen
}) => {
  const [sectors, setSectors] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const selectedSector = watch("sectorId");

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API}/sectors`
        );
        setSectors(data);
      } catch (err) {
        console.error("Failed to fetch sectors", err);
      }
    };
    fetchSectors();
  }, []);

  const fetchJobs = useCallback(async (sectorId) => {
    setLoadingJobs(true);
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API}/sectors/${sectorId}/jobs`
      );
      setJobs(data.jobs || []);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
      setJobs([]);
    } finally {
      setLoadingJobs(false);
    }
  }, []);

  useEffect(() => {
    if (selectedSector) {
      fetchJobs(selectedSector);
    } else {
      setJobs([]);
    }
  }, [selectedSector, fetchJobs]);

  const onSubmit = async (data) => {
    try {
      const payload = new FormData();
      Object.entries(data).forEach(([key, value]) =>
        payload.append(key, value)
      );

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API}/employer/recruitment`,
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(res);
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
          Employer Recruitment Request
        </h1>
        <IoCloseOutline
          onClick={() => setIsFormOpen(false)}
          className="cursor-pointer text-gray-600 hover:text-red-500"
          size={36}
        />
      </div>

      <p className="text-gray-600 mb-6">
        Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full">
        {/* --- Section: Contact Info --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email *
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                placeholder="john@mail.com"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                {...register("phone")}
                placeholder="+1 234 567 890"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="companyName">
                Company Name
              </label>
              <input
                {...register("companyName")}
                placeholder="Talentsourze"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* --- Section: Location --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Location</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="country">
                Country
              </label>
              <input
                {...register("country")}
                placeholder="United States"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="city">
                City
              </label>
              <input
                {...register("city")}
                placeholder="New York"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* --- Section: Recruitment Details --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recruitment Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="sectorId">
                Sector *
              </label>
              <select
                {...register("sectorId", { required: "Sector is required" })}
                className="w-full rounded-md border p-2 bg-white"
              >
                <option value="">-- Select Sector --</option>
                {sectors.map((sector) => (
                  <option key={sector.id} value={sector.id}>
                    {sector.name}
                  </option>
                ))}
              </select>
              {errors.sectorId && <p className="text-red-500 text-sm">{errors.sectorId.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="jobId">
                Job Role / Position *
              </label>
              <select
                {...register("jobId", { required: "Job role is required" })}
                className="w-full rounded-md border p-2 bg-white"
                disabled={!selectedSector || loadingJobs}
              >
                <option value="">
                  {loadingJobs ? "Loading jobs..." : "-- Select Job --"}
                </option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
              {errors.jobId && <p className="text-red-500 text-sm">{errors.jobId.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="staffNeeded">
                Staff Needed
              </label>
              <input
                {...register("staffNeeded")}
                placeholder="10 hires"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="startDate">
                Expected Start Date
              </label>
              <input
                type="date"
                {...register("startDate")}
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* --- Section: Budget & Notes --- */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Details</h2>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="budget">
                Budget / Salary Range
              </label>
              <input
                {...register("budget")}
                placeholder="$40,000 - $60,000"
                className="w-full rounded-md border p-2 bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="notes">
                Additional Notes
              </label>
              <textarea
                {...register("notes")}
                placeholder="Enter additional requirements or notes here..."
                className="w-full rounded-md border p-3 bg-white h-32 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 transition px-10 py-3 text-white rounded-lg font-medium disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Send Request"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployerForm;
