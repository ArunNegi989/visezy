import styles from "./Contact.module.css";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Contact() {
  return (
 <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>
            Contact Us
          </span>

          <h2>
            Let's Find The Right
            Insurance Plan For You
          </h2>

          <p>
            Have questions? Speak with our
            experts and get personalized
            insurance recommendations.
          </p>

          <div className={styles.info}>
            <div>
              <HiOutlinePhone />
              <span>+91 9634556234</span>
            </div>

            <div>
              <HiOutlineMail />
              <span>sales@visezy.in</span>
            </div>

            <div>
              <HiOutlineLocationMarker />
              <span>
                Dehradun, Uttarakhand, India
              </span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <form>
            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your requirements"
            />

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}