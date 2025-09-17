import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
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

  // Watch sector field for changes
  const selectedSector = watch("sectorId");

  // Fetch sectors once on mount
  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API}sectors`
        );
        setSectors(data);
      } catch (err) {
        console.error("Failed to fetch sectors", err);
      }
    };
    fetchSectors();
  }, []);

  // Fetch jobs when a sector is selected
  const fetchJobs = useCallback(async (sectorId) => {
    setLoadingJobs(true);
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API}sectors/${sectorId}/jobs`
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
        `${process.env.NEXT_PUBLIC_BASE_API}employer/recruitment`,
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
    <div
      className="max-w-7xl w-full py-10 pt-24 m-auto flex flex-col items-center justify-between
        xl:px-0 xl:gap-20 
        lg:px-20 lg:gap-10 
        md:px-20 
        max-md:px-5 max-md:py-10"
    >
      <h1 className="text-5xl font-bold">Get in touch with us. We're here to assist you.</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 flex flex-col items-center w-full gap-10 brand-bg-blue rounded-xl"
      >
        {/* Personal Information */}
        <div className="flex w-full max-md:flex-col md:gap-8 max-md:gap-5">
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="fullName">
              Full Name
            </label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              placeholder="i.e. John Doe"
              className="rounded p-2 bg-white"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="i.e. john@mail.com"
              className="rounded p-2 bg-white"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="flex w-full max-md:flex-col md:gap-8 max-md:gap-5">
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="phone">
              Phone
            </label>
            <input
              {...register("phone")}
              placeholder="i.e. +1-234-567-7890"
              className="rounded p-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="companyName">
              Company Name
            </label>
            <input
              {...register("companyName")}
              placeholder="i.e. Talentsourze"
              className="rounded p-2 bg-white"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex w-full max-md:flex-col md:gap-8 max-md:gap-5">
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="country">
              Country
            </label>
            <input
              {...register("country")}
              placeholder="i.e. United States"
              className="rounded p-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="city">
              City
            </label>
            <input
              {...register("city")}
              placeholder="i.e. New York"
              className="rounded p-2 bg-white"
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="flex w-full max-md:flex-col md:gap-8 max-md:gap-5">
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="sectorId">
              Sector
            </label>
            <select
              {...register("sectorId", { required: "Sector is required" })}
              className="rounded p-2 bg-white"
            >
              <option value="">-- Select Sector --</option>
              {sectors.map((sector) => (
                <option key={sector.id} value={sector.id}>
                  {sector.name}
                </option>
              ))}
            </select>
            {errors.sectorId && (
              <span className="text-red-500 text-sm">{errors.sectorId.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="jobId">
              Job Roles / Positions
            </label>
            <select
              {...register("jobId", { required: "Job role is required" })}
              className="rounded p-2 bg-white"
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
            {errors.jobId && (
              <span className="text-red-500 text-sm">{errors.jobId.message}</span>
            )}
          </div>
        </div>

        {/* Hiring Details */}
        <div className="flex w-full max-md:flex-col md:gap-8 max-md:gap-5">
          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="staffNeeded">
              Staff Needed
            </label>
            <input
              {...register("staffNeeded")}
              placeholder="i.e. 10 hires"
              className="rounded p-2 bg-white"
            />
          </div>

          <div className="flex flex-col gap-3 md:w-1/2 max-md:w-full">
            <label className="font-bold font-heading" htmlFor="startDate">
              Expected Start Date
            </label>
            <input type="date" {...register("startDate")} className="rounded p-2 bg-white" />
          </div>
        </div>

        {/* Additional Details */}
        <div className="flex flex-col w-full gap-3">
          <label className="font-bold font-heading" htmlFor="budget">
            Budget / Salary Range
          </label>
          <input
            {...register("budget")}
            placeholder="i.e. $40,000 - $60,000"
            className="rounded p-2 bg-white"
          />
        </div>

        <div className="flex flex-col w-full gap-3">
          <label className="font-bold font-heading" htmlFor="notes">
            Additional Message / Notes
          </label>
          <textarea
            {...register("notes")}
            placeholder="Enter additional requirements or notes here..."
            className="rounded p-2 bg-white h-32"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#1C1C1C] px-20 py-4 text-white rounded-lg font-source disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
