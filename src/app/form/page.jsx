'use client'

import Image from 'next/image';
import styles from '../../../styles/formPage.module.css';

import { useForm } from '../hooks/useForm';
import DetailControl from '../hooks/DetailControl';

import CompanyInformation from './components/CompanyInformation';
import ProjectInformation from './components/ProjectInformation';
import Contact from './components/Contact';

// Import Icons and Images
import Rocket from '../../../public/rocket-purple.svg';

export default function FormPage() {
  const formComponents = [<CompanyInformation key={0}/>, <ProjectInformation key={1} />, <Contact key={0}/> ]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className={styles.FormControl}>
      <div className={styles.DetailContainer}>
        <div className={styles.LogoContainer}>
          <Image
            src={Rocket}
            alt="Purple Rocket Logo"
            width={45}
            id={styles.Logo}
          />
          <p id={styles.TitleLogo}>Messier</p>
          <p id={styles.SubtitleLogo}>Amaral</p>
        </div>
        <DetailControl step={currentStep} />
      </div>

      <div className={styles.MainContainer}>
        <nav className={styles.NavMenu}>
          <p>Menu de navegação aqui...</p>
        </nav>

        <span id={styles.Divider}></span>

        <form className={styles.FormContainer} onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className={styles.FormSteps}>
            {currentComponent}
          </div>
          <div className={styles.FormActions}>
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                Voltar
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                Avançar
              </button>
            ) : (
              <button type='button'>
                  Enviar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
