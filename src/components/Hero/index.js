import styles from '../Hero/styles.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero__inner + " flex h-full flex-col justify-center pl-24"}>
            <span className={styles.hero__inner_leftTop + " hidden"}></span>
            <p className={styles.hero__inner_text + " font-gotham text-5xl font-bold lg:max-w-[663px] lg:leading-tight"}>
                Discover, collect, and sell extraordinary NFTs
            </p>
            <span className={styles.hero__inner_rightBottom + " hidden"}></span>
        </div>
    </div>
  )
}

export default Hero
