import phone from "../../../assets/phone.png";
import call from "../../../assets/call.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#F2F3F7] bg-[url(/src/assets/contact_bg.png)] bg-no-repeat bg-right-top col-span-6 p-9 flex flex-col gap-14"
    >
      <div className="flex gap-4 items-center justify-center md:justify-start">
        <img src={phone} alt="" />
        <h2 className="text-2xl text-center md:text-left">Get In Touch</h2>
        <img src={call} alt="" />
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "❗Please input your name")
            .required("❗Please input your name"),
          email: Yup.string().email("❗ Invalid email address"),
          message: Yup.string()
            .min(2, "❗Leave a message please")
            .required("❗Leave a message please"),
        })}
        onSubmit={(values) => {
          fetch("https://formsubmit.co/ajax/faithoyeniyi21@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              message: values.message,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                window.location.reload();
                window.alert("message has been sent");
              }
              console.log(data);
            })
            .catch((error) => console.log(error));
        }}
      >
        <Form className="flex flex-col md:grid md:grid-cols-4 gap-10 md:px-20 text-left justify-between">
          <label htmlFor="name" className="col-span-2 w-full">
            Name
            <Field
              type="text"
              name="name"
              className="outline-0 border-0 border-b-1 block mt-4 w-full"
            />
            <ErrorMessage component="span" name="name" className="error" />
          </label>
          <label htmlFor="email" className="col-span-2 w-full">
            Email Address
            <Field
              type="email"
              name="email"
              className="outline-0 border-0 border-b-1 block mt-4 w-full"
            />
            <ErrorMessage component="span" name="email" className="error" />
          </label>
          <label htmlFor="message" className="col-span-4">
            Leave a Message...
            <Field
              type="text"
              name="message"
              className="outline-0 border-0 border-b-1 block mt-4 w-full"
            />
            <ErrorMessage component="span" name="message" className="error" />
          </label>
          <button className="bg-transparent cursor-pointer border border-black rounded px-12 py-4 col-span-2 col-start-2 mt-4 mb-8">
            Send Message
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
