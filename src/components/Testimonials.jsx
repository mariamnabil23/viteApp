import styles, {layout} from '../style'
import {feedback} from '../constants'
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] -right-[50%] top-0 w-[60%] h-[60%] rounded-full blue__gradient" />

      <div className="w-full flex flex-col justify-between items-center md:flex-row mb-6 sm:mb-16 relative z-[1] ">
        <h1 className={styles.heading2}>
          What pepole are <br className="sm:block hidden" /> saying about us?
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} max-w-[470px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center sm:justify-start feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials