import style from './style.module.css'

function Footer() {
    return (
        <footer className={style.footer} id="our_contacts">
            <div className={style.networks}>
                <h2>Sip, Savor, Smile. <span>It's coffee time!</span></h2>
                <div className={style.links}>
                    <div className={style.socialLinks} ></div>
                    <div className={style.socialLinks}></div>
                    <div className={style.socialLinks} ></div>
                </div>
            </div>
            <div className={style.contacts}>
                <h4>Contact us</h4>
                <div className={style.contactsContainer}>
                    <div >
                        <div className={style.pinalt}></div>
                        <p>8558 Green Rd., LA</p>
                    </div>
                    <div>
                        <div className={style.phone}></div>
                        <p>+1 (603) 555-0123</p>
                    </div>
                    <div>
                        <div className={style.clock}></div>
                        <p>Mon-Sat: 9:00 AM – 23:00 PM</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer