const FeeRefundPolicy = () => {
  const policies = [
    {
      number: "01",
      title: "Payment Cancellation",
      description:
        "Please note that cancellation of payment is not permitted once the transaction has been completed.",
      icon: "×",
    },
    {
      number: "02",
      title: "Duplicate Payment",
      description:
        "In the event of a duplicate payment, students or parents may contact the Accounts Department for a refund. Kindly provide valid proof such as the transaction reference number or a copy of your bank statement.",
      icon: "₹",
    },
    {
      number: "03",
      title: "Acceptance of Terms",
      description:
        "By proceeding with the payment through our online payment gateway, you acknowledge and accept these terms and conditions, including any future updates made available on our official website.",
      icon: "✓",
    },
    {
      number: "04",
      title: "Accepted Modes of Payment",
      description:
        "Net Banking (NEFT/RTGS) and UPI using the college account details are accepted modes of payment.",
      icon: "↗",
    },
    {
      number: "05",
      title: "Refund Guidelines",
      description:
        "All refunds will be processed in strict accordance with the Directorate of Medical Education (DME) and Selection Committee, Government of Tamil Nadu guidelines.",
      icon: "✓",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

   


      {/* ================= CONTENT ================= */}
<section className="relative pt-20 pb-16 sm:pt-24 sm:pb-16">

        <div className="container-custom">

          {/* Intro Header */}
        <div
  className="mx-auto mb-10 max-w-3xl text-center"
  data-aos="fade-up"
>

            <p className="mb-3 font-['Montserrat'] text-[13px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Payment Information
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#163b72] sm:text-5xl">
              FEE Refund Policy
            </h2>

            <div className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400" />

            <p 
className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
              Please review the following information carefully before
              completing an online payment.
            </p>

          </div>


          {/* ================= POLICY CARDS ================= */}
          <div className="relative mx-auto max-w-5xl">

            {/* Vertical Line */}
            <div className="absolute left-[29px] top-8 bottom-8 hidden w-[2px] bg-gradient-to-b from-blue-300 via-blue-500 to-cyan-300 md:block" />


            <div className="space-y-6">

              {policies.map((policy, index) => (

                <div
                  key={policy.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative"
                >

                  <div className="flex gap-5 md:gap-7">

                    {/* Number */}
                    <div className="relative z-10 hidden shrink-0 md:flex">

                      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[5px] border-[#f7f9fc] bg-gradient-to-br from-blue-700 to-cyan-500 font-['Montserrat'] text-[13px] font-bold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 group-hover:scale-110">
                        {policy.number}
                      </div>

                    </div>


                    {/* Card */}
                    <div className="w-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)] sm:p-7 md:p-8">

                      <div className="flex items-start gap-5">

                        {/* Mobile / Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 font-['Montserrat'] text-lg font-bold text-blue-700 ring-1 ring-blue-100">

                          {policy.icon}

                        </div>


                        <div className="flex-1">

                          <div className="mb-2 flex flex-wrap items-center gap-3">

                          

                            <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />

                            <h3 className="font-['Montserrat'] text-[17px] font-bold text-[#163b72] sm:text-[20px]">
                              {policy.title}
                            </h3>

                          </div>


                          <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                            {policy.description}
                          </p>


                          {/* Payment Pills */}
                          {policy.number === "04" && (
                            <div className="mt-5 flex flex-wrap gap-2">

                              <span className="rounded-full bg-blue-50 px-4 py-2 font-['Montserrat'] text-[12px] font-semibold text-blue-700">
                                NEFT
                              </span>

                              <span className="rounded-full bg-blue-50 px-4 py-2 font-['Montserrat'] text-[12px] font-semibold text-blue-700">
                                RTGS
                              </span>

                              <span className="rounded-full bg-cyan-50 px-4 py-2 font-['Montserrat'] text-[12px] font-semibold text-cyan-700">
                                UPI
                              </span>

                            </div>
                          )}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* ================= IMPORTANT NOTICE ================= */}
          <div
            className="mx-auto mt-12 max-w-5xl"
            data-aos="fade-up"
          >

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#102f69] to-[#087d91] p-[1px] shadow-xl">

              <div className="relative overflow-hidden rounded-2xl bg-white/95 p-7 sm:p-9">

                {/* Decorative Circle */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-100/60" />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                      />
                    </svg>

                  </div>


                  <div>

                    <p className="mb-1 font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                      Important Information
                    </p>

                    <h3 className="mb-2 font-['Montserrat'] text-[17px] font-bold text-[#163b72] sm:text-[20px]">
                      Please verify your payment details
                    </h3>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[16px]">
                      Please ensure that all payment details are verified
                      before completing a transaction. Refunds, wherever
                      applicable, will be handled according to the applicable
                      government guidelines.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= FOOTER NOTE ================= */}
          <div
            className="mx-auto mt-8 max-w-5xl text-center"
            data-aos="fade-up"
          >

            <p 
className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
              Refunds are processed in accordance with the applicable
              Directorate of Medical Education (DME) and Selection Committee
              guidelines.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default FeeRefundPolicy;