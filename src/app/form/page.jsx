import Image from 'next/image';
import styles from '../../../styles/formPage.module.css';

// Import Steps
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

import DetailOne from './components/details/DetailOne'
import DetailTwo from './components/details/DetailTwo'
import DetailThree from './components/details/DetailThree'

// Import Icons and Images
import Rocket from '../../../public/rocket-purple.svg'

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
                <DetailTwo />
            </div>

            <div className={styles.MainContainer}>
                <nav className={styles.NavMenu}>
                    <p>Menu de navegação aqui...</p>
                </nav>

                    <span id={styles.Divider}></span>

                <main className={styles.Main}>
                    <form>
                        <StepOne />
                    </form>
                </main>
            </div>
        </div>
    )
}