'use client'

import Image from 'next/image';
import styles from '../../../styles/formPage.module.css';

import { useState } from 'react';
import FormControl from '../hooks/FormControl';
import DetailControl from '../hooks/DetailControl';

// Import Icons and Images
import Rocket from '../../../public/rocket-purple.svg';

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviusStep = () => {
    setCurrentStep(currentStep - 1);
  };

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

        <form className={styles.FormContainer}>
          <div className={styles.FormSteps}>
            <FormControl step={currentStep} />
          </div>
          <div className={styles.FormActions}>
            <button
              type="button"
              onClick={handlePreviusStep}
              disabled={currentStep === 0}
            >
              Voltar
            </button>
            <button
              type="submit"
              onClick={handleNextStep}
              disabled={currentStep === 2}
            >
              Próxima etapa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
