import React from 'react';
import styles from './react-accessibility-component.module.scss';
import AccessibilityLogo from './components/accessibility-logo';
import useAccessibilityComponent from './hooks/use-accessibility-compoenent';

interface AccessibilityComponentProps {
    text?: string;
}

const AccessibilityComponent: React.FC<AccessibilityComponentProps> = () => { 

    const shadowDomJsxElement = 
    <div>
        <AccessibilityLogo width='40px' height='40px' fill='blue' />
    </div>;

    const { hostRef, componentOpenClose } = useAccessibilityComponent({ shadowDomJsxElement });

    return (
        <div role="region" aria-label="Sample Accessibility Component" ref={hostRef} className={[
            styles.wrapper, 
            componentOpenClose && styles.isWrapperClose,
            !componentOpenClose && styles.isWrapperOpen
        ].join(' ')} id="container-accessibility-wrapper"></div>
    );
};

export default AccessibilityComponent;