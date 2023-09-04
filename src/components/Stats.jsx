import styles from '../style'
import {stats} from '../constants'

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-1 flex-row justify-center items-center m-3">
          <h4 className="font-poppins font-semibold text-white text-[30px] leading-[40px] xs:text-[40px] xs:leading-[50px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal text-gradient uppercase text-[15px] leading-[20px] xs:text-[20px] xs:leading-[25px] ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats