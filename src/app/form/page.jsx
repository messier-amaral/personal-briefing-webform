'use client' // Definin that the page will be used on the client side, thus beign able to use useState from React.js

import Image from 'next/image';
import styles from '../../../styles/formPage.module.css';

// Hooks
import { useForm } from '../hooks/useForm';
import DetailControl from './DetailControl';
import PhraseControl from './PhraseControl';

// Form Steps
import CompanyInformation from './components/CompanyInformation';
import ProjectInformation from './components/ProjectInformation';
import Contact from './components/Contact';

import Steps from './components/Steps';

// Import Icons and Images
import Rocket from '../../../public/rocket-purple.svg';
import { MdOutlineNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { BiSend } from 'react-icons/bi'

export default function FormPage() {
  const formComponents = [<CompanyInformation key={0}/>, <ProjectInformation key={1} />, <Contact key={2}/> ]

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
          <Steps currentStep={currentStep}/>
          <PhraseControl step={currentStep}/>
        </nav>

        <span id={styles.Divider}></span>

        <form className={styles.FormContainer} onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className={styles.FormSteps}>
            {currentComponent}
          </div>
          <div className={styles.FormActions}>
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)} id={styles.PreviousButton} >
                <MdNavigateBefore id={styles.PreviousIcon} />
                <span className={styles.TextButton}>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit" id={styles.NextButton}>
                <span className={styles.TextButton}>Avançar</span>
                <MdOutlineNavigateNext className={styles.ButtonIcons} />
              </button>
            ) : (
              <button type='button' id={styles.SendButton}>
                  <span className={styles.TextButton}>Enviar</span>
                  <BiSend className={styles.ButtonIcons} id={styles.SendIcon}/>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
