import Image from 'next/image';
import styles from './details.module.css';
import utilStyles from '../../../../../styles/utils.module.css'

// Detail Image
import PaperBoat from '../../../../../public/paper-boat.svg'

export default function DetailOne() {
    return (
        <div>
            <h2 className={styles.MotivationTitle} id={utilStyles.PurpleColor}>Navegue em águas desconhecidas e deixe sua marca registrada nas mentes e corações</h2>
            <Image 
                src={PaperBoat}
                alt='Team in Paper Boat'
                width={360}
                className={styles.DetailImage}
                id={styles.DetailTwo}
            />
        </div>
    )
}