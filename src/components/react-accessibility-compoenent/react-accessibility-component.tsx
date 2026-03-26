import React from 'react';
import styles from './react-accessibility-component.module.scss';
import AccessibilityLogo from './components/accessibility-logo';
import useAccessibilityComponent from './hooks/use-accessibility-compoenent';
import { Template } from '@krasnoff/react-shadow-dom-component';

const AccessibilityComponent: React.FC = () => { 

    const { hostRef, componentOpenClose } = useAccessibilityComponent();

    // Create a CSS stylesheet for the Shadow DOM
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(`
        
    `);

    return (
        <div role="region" aria-label="Sample Accessibility Component" ref={hostRef} className={[
                styles.wrapper, 
                componentOpenClose && styles.isWrapperClose,
                !componentOpenClose && styles.isWrapperOpen
            ].join(' ')} id="container-accessibility-wrapper">
            <Template 
                shadowrootmode="open" 
                sheet={stylesheet}
                shadowrootdelegatesfocus={true}
            >
                <AccessibilityLogo width='40px' height='40px' fill='blue' />
            </Template>
        </div>
    );
};

export default AccessibilityComponent;