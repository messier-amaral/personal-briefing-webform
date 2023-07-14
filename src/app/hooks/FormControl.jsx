// Steps
import CompanyInformation from '../form/components/CompanyInformation';
import ProjectInformation from '../form/components/ProjectInformation';
import Contact from '../form/components/Contact';

export default function FormControl({ step }) {
    switch(step) {
        case 0:
            return <CompanyInformation/>;
        case 1:
            return <ProjectInformation />;
        case 2:
            return <Contact />;
        default:
            return null;
    }
}