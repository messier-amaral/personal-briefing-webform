'use client' // Definin that the page will be used on the client side, thus beign able to use useState from React.js

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/FormPage.module.css';

// Hooks
import { useForm } from '../hooks/useForm';
import React, { useState } from 'react';

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

// Send Email Service
import emailjs from '@emailjs/browser'

export default function FormPage() {
  // Getting data from CompanyInformation
  const [formData, setFormData] = useState({
    company_name: '', company_segment: '', company_slogan: '',
    company_goal: '', target_audience: '', reason_to_choose: '',
    project_color: '', project_element: '', service_option: '',
    project_emotion: '', project_visual: '', project_requisite: '',
    project_information: '', representant: '', number: '', email: '',
    address: '', services_add: '', budget: '', deadline: '',
    define_company: '', message: '',
  });

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log(formData); 

    let dataEmail = formData

    emailjs.send("service_key","template_key", dataEmail, "personal_key")
  };


  const formComponents = [
    <CompanyInformation key={0} onChange={handleInputChange} formData={formData} />,
    <ProjectInformation key={1}  onChange={handleInputChange} formData={formData} />,
    <Contact key={2} onChange={handleInputChange} formData={formData} /> 
  ]

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
              <Link href='/thanks' id={styles.LinkButton}>
                <button type='button' id={styles.SendButton} onClick={handleFormSubmit}>
                  <span className={styles.TextButton}>Enviar</span>
                  <BiSend className={styles.ButtonIcons} id={styles.SendIcon}/>
              </button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
