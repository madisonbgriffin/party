import { Formik, Field, Form, ErrorMessage } from "formik"

import { blob } from "../../assets"

const ContactForm = () => {
  return (
    <section className="py-16 lg:px-20 ">
    
      <div className="absolute -left-32">
        <div className="relative bottom-72 z-0 h-[400px] w-[400px] rounded-[50%] bg-gradient-to-b from-[#C2A0F0] to-[#EE77C7]/[0.94] opacity-[0.75] blur-[3px]" />
      </div>
      
      <div className="absolute left-20 top-20">
        <div className="relative bottom-0 z-0 h-[300px] w-[300px] rounded-[50%] bg-gradient-to-b from-[#4C6DDF]/[0.54] to-[#E46EC7]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>

      <div className="absolute -right-10 bottom-10">
        <div className="   z-0 h-[300px] w-[300px] rounded-[50%] bg-gradient-to-b from-[#71D57C] to-[#E8C483]/[0.94] opacity-[0.75] blur-[3px]" />
      </div>

      <div className="absolute top-0 right-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#F2F2F2] opacity-[0.94] blur-[130px]" />

      <div className="glass relative rounded-[69px] text-white ">
        <div className="container mx-auto px-5 py-10 lg:mx-auto">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="mb-4 text-3xl font-medium lg:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Questions you may have will be answered
            </p>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500))
              alert(JSON.stringify(values, null, 2))
            }}
          >
            <Form>
              <div className="mx-auto md:w-2/3 lg:w-1/2">
                <div className="-m-2 flex flex-wrap">
                  <div className="w-1/2 p-2">
                    <div className="relative">
                      <label
                        htmlFor="first_name"
                        className="text-sm leading-7 "
                      ></label>
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="w-full  rounded border  bg-inherit py-1  px-3 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-pink-600"
                      />
                      <ErrorMessage name="firstName" />
                    </div>
                  </div>
                  <div className="w-1/2 p-2">
                    <div className="relative">
                      <label
                        htmlFor="last_name"
                        className="text-sm leading-7"
                      ></label>

                      <Field
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="w-full rounded border bg-inherit py-1 px-3 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-pink-600"
                      />
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="relative ">
                      <label
                        htmlFor="email"
                        className="text-sm leading-7"
                      ></label>

                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full rounded border bg-inherit py-1 px-3 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-pink-600"
                      />
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="text-sm leading-7"
                      ></label>
                      <Field
                        name="message"
                        placeholder="Message"
                        as="textarea"
                        className="h-32 w-full resize-none rounded border bg-inherit py-1 px-3 text-base leading-6 text-white outline-none transition-colors duration-200 ease-in-out focus:border-pink-600"
                      />
                      <ErrorMessage name="message" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <button
                      className="mx-auto flex rounded border-0 bg-pink-600 py-2 px-5 text-sm text-white hover:bg-pink-700 focus:outline-none lg:px-8 lg:text-lg"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
