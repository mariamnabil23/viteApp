import styles, {layout} from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
      flex flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex flex-1 flex-col'>
        <h2 className={styles.heading2}>
          Let's try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} ml-0 mt-5 sm:ml-10 sm:mt-0`}>
        <Button />
      </div>
    </section>
  );
}

export default CTA