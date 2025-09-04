const ContactForm = () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <form className="p-10 flex flex-col items-center w-full gap-10 brand-bg-blue rounded-xl">
              <div className="flex w-full gap-8">
                <div className="flex flex-col w-1/2 gap-3">
                  <label className="font-bold font-heading" htmlFor="companyName">Company Name</label>
                  <input 
                    placeholder="i.e. Talentsourze"
                    className="rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col w-1/2 gap-3">
                  <label className="font-bold font-heading" htmlFor="email">Email</label>
                  <input 
                    placeholder="i.e. john@mail.com"
                    className="rounded p-2 bg-white"
                  />
                </div>
              </div>
              <div className="flex w-full gap-8">
                <div className="flex flex-col w-1/3 gap-3">
                  <label className="font-bold font-heading" htmlFor="sector">Sector</label>
                  <input 
                    placeholder="i.e. +1-234-567-7890"
                    className="rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col w-1/3 gap-3">
                  <label className="font-bold font-heading" htmlFor="country">Country</label>
                  <input 
                    placeholder="i.e. +1-234-567-7890"
                    className="rounded p-2 bg-white"
                  />
                </div>

                <div className="flex flex-col w-1/3 gap-3">
                  <label className="font-bold font-heading" htmlFor="numStaffNeed">Number of StaffNeeded</label>
                  <input 
                    placeholder="i.e. john@mail.com"
                    className="rounded p-2 bg-white"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-full gap-8">
                <div className="flex flex-col w-full gap-3">
                  <label className="font-bold font-heading" htmlFor="sector">Sector</label>
                  <input 
                    placeholder="i.e. +1-234-567-7890"
                    className="rounded p-2 bg-white"
                  />
                </div>
                <button className="bg-[#1C1C1C] px-20 py-4 text-white rounded-lg font-source">Send</button>
              </div>
            </form>
        </div>
    )
}

export default ContactForm;