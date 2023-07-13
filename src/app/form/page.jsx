import Image from 'next/image';
import styles from '../../../styles/formPage.module.css';

// Import Steps
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

// Import Icons and Images
import Rocket from '../../../public/rocket-purple.png'

export default function FormPage() {
    return (
        <div className={styles.FormControl}>
            <div className={styles.DetailContainer}>
                <div className={styles.LogoContainer}>
                    <Image
                        src={Rocket}
                        alt='Purple Rocket Logo'
                        width={45}
                        id={styles.Logo} 
                    />
                    <p id={styles.TitleLogo}>Messier</p>
                    <p id={styles.SubtitleLogo}>Amaral</p>
                </div>
                <p>Componente de imagem aqui...</p>
            </div>

            <div className={styles.MainContainer}>
                <nav className={styles.NavMenu}>
                    <p>Menu de navegação aqui...</p>
                </nav>

                <hr />

                <main className={styles.Main}>
                    <form>
                        <StepOne />
                    </form>
                </main>
            </div>
        </div>
    )
}