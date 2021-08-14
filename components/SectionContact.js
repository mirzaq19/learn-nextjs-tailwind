import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionContact() {
  return (
    <section className="container mx-auto px-10 2xl:px-0" id="contact">
      <div className="bg-primarygray flex flex-wrap rounded-lg">
        <div className="md:w-6/12 w-full md:border-r border-b md:border-b-0 border-primarygray-200">
          <div className="md:p-14 p-8">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>
              Beberapa cara menghubungi saya
            </SectionParagraph>
            <ContactItem
              label="mail"
              value="mirzaqarjap@gmail.com"
              icon="mail.svg"
              className="mt-10"
            />
            <ContactItem label="Phone" value="082234260055" icon="phone.svg" />
            <ContactItem
              label="Twitter"
              value="@mirzaq_arjap"
              icon="twitter.svg"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <div className="md:p-14 p-8">
            <form>
              <div className="flex flex-wrap -mx-2">
                <div className="md:w-6/12 w-full px-2">
                  <Field label="Name" name="name" type="text" />
                </div>
                <div className="md:w-6/12 w-full px-2">
                  <Field label="Email" name="email" type="text" />
                </div>
              </div>
              <Field label="Subject" name="subject" type="text" />
              <Field
                label="Message"
                name="message"
                type="textarea"
                className="h-40"
              />
              <div className="text-right">
                <Button variant="black">Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
