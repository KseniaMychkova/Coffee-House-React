import style from './style.module.css'
import MobilScreen from './assets/mobile-screens.png'

function MobilApps() {
    return (
        <section className={style.mobilApps} id="our_apps">
            <div className={style.links}>
                <h2><span>Download</span> our apps to start ordering</h2>
                <p>Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are</p>
                <div className={style.buttons}>
                    <div className={style.btnContainer}>
                        <div className={style.iconApp}></div>
                        <div className={style.btnText}>
                            <p style={style.smallTxt}>Available on the</p>
                            <p>App Store</p>
                        </div>

                    </div>
                    <div className={style.btnContainer}>
                        <div className={style.iconGoogle}></div>
                        <div className={style.btnText}>
                            <p>Available on</p>
                            <p>Google Play</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={style.mobileScreen}>
                <img src={MobilScreen} alt=""/>
            </div>
        </section>
    )
}

export default MobilApps