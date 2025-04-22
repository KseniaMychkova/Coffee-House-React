import style from './style.module.css'
import { useNavigate } from 'react-router-dom';

function Preview() {
      const navigate = useNavigate();
    
    return (
        <section className={style.preview}>
            <h1><span>Enjoy</span> premium coffee at our charming cafe</h1>
            <p>With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.</p>
            <div onClick={() => navigate('/menu')}>
                <button>Menu </button>
            </div>
        </section>
    )
}

export default Preview