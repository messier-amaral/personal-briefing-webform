import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Icons and Images Import
import { BiCodeAlt } from 'react-icons/bi';
import { PiPencilCircleDuotone } from 'react-icons/pi';
import { CgBrowser } from 'react-icons/cg';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

import Rocket from '../../public/rocket-purple.svg';
import DevTeam from '../../public/dev-team-image.svg'

export default function Home() {
  return (
    <div className={styles.Container}>

      <div className={styles.DetailsContainer}>
        <div className={styles.LogoContainer}>
          <Image
            src={Rocket}
            alt='Purple Rocket Logo'
            width={45}
            id={styles.LogoPersonal}
          />
          <p id={styles.TitleLogo}>Messier</p>
          <p id={styles.SubtitleLogo}>Amaral</p>
        </div>
        <Image 
          src={DevTeam}
          alt='Dev Team Image'
          width={380}
          id={styles.DevTeamImage}
        />
      </div>

      <main className={styles.Main}>
        <h1 id={styles.Title}>Desbloqueie o poder da sua marca com o Briefing perfeito!</h1>

        <p className={styles.Description}>
          Impulsione sua marca com o Briefing perfeito! Forneça informações essenciais para criar um serviço personalizado e sob medida para você. Seja um site, uma logo, um design completo ou qualquer outra necessidade, essas informações serão enviadas diretamente para mim. 
        </p>

        <p className={styles.Description}>
          Com uma análise cuidadosa, entrarei em contato o mais rápido possível para transformar suas ideias em realidade!
        </p>

        <h2 id={styles.TitleSection}>Serviços Oferecidos</h2>
        <section className={styles.ServicesContainer}>

            <div>
              <div className={styles.Service}>
                <BiCodeAlt className={styles.Icons} />
                <p className={styles.NameService}>Desenvolvedor Full-Stack</p>
              </div>
              <div className={styles.Service}>
                <PiPencilCircleDuotone className={styles.Icons} />
                <p className={styles.NameService}>Designer Gráfico</p>
              </div>
            </div>


            <div id={styles.SecondGroup}>
              <div className={styles.Service}>
                <CgBrowser className={styles.Icons} />
                <p className={styles.NameService}>Designer Web / UI &amp; UX</p>
              </div>
              <div className={styles.Service}>
                <HiOutlineSpeakerphone className={styles.Icons} />
                <p className={styles.NameService}>Especialista em Marketing</p>
              </div>
            </div>
        </section>
        <Link href='/' id={styles.MoreServicesLink}>Ver todos os Serviços</Link>

        <Link href='/form' id={styles.LinkButton}>Iniciar Formulário</Link>
      </main>
    </div>
  )
}
