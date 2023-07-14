import Image from 'next/image';
import styles from './details.module.css';

// Detail Image
import Trade from '../../../../../public/internacional-trade.svg'

export default function DetailOne() {
    return (
        <div>
            <h2 className={styles.MotivationTitle}>Empreender não se resume apenas a criar, mas, acima de tudo, a compreender.</h2>
            <Image 
                src={Trade}
                alt='International Trade Image'
                width={380}
                className={styles.DetailImage}
            />
        </div>
    )
}