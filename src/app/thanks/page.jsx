import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/ThanksPage.module.css';

import Prototype from '../../../public/prototype-rocket.svg'

export default function Thanks() {
    return (
        <div className={styles.ThanksContainer}>
            <h1 id={styles.Title}>Agradeço por me escolher como profissional que ajudará a impulsionar o seu negócio!</h1>

            <p className={styles.Description}>
                Agradeço por escolher meus serviços profissionais! Todos os dados fornecidos serão enviados para meu E-mail para análise em até 24 horas. Entrarei em contato o mais rápido possível.
            </p>
            <p className={styles.Description}>
                Se já estiver envolvido em um projeto, fornecerei uma data de início. Caso contrário, iniciarei assim que as negociações forem concluídas. Suas informações serão mantidas em sigilo absoluto e não compartilhadas com terceiros.
            </p>

            <Image 
                src={Prototype}
                alt='Image of a rocket prototype'
                width={350}
                id={styles.PrototypeImage}
            />

            <Link href='#' id={styles.LinkButton}>Ver Projetos Anteriores</Link>
        </div>
    )
}