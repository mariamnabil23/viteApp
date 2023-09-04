import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[3px]`}
    >
      <div
        className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}
      >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-[18px] leanding-[24px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="w-[22px] h-[22px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leanding-[24px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted