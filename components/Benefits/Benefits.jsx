import style from './style.module.css'
import img1 from './assets/about-1.jpg'
import img2 from './assets/about-2.jpg'
import img3 from './assets/about-3.jpg'
import img4 from './assets/about-4.jpg'

function Benefits() {
    return (
        <section className={style.benefits} id="about_us">
            <h2>Resource is <span>the perfect and cozy place </span>where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.</h2>
            <div className={style.gallery}>
                <div className={style.galleryPart1}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
                <div className={style.galleryPart2}>
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Benefits