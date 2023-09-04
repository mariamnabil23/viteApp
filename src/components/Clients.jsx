import styles from '../style'
import {clients} from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {clients.map((client) => (
          <div key={client.id} className={`${styles.flexCenter} flex flex-1 min-w-[120px] sm:min-w-[190px]`}>
            <img
              src={client.logo}
              alt="client-logo"
              className="w-[100px] sm:w-[190px] object-contain "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients