# React Vite Accessibility Component

## Overview

`AccessibilityComponent` is a React component designed to enhance web accessibility by providing essential features that support users with disabilities. It is intended to be used as part of a broader strategy for making web applications accessible.

## Installation

To install the component, use npm or yarn:

```sh
npm install react-accessibility-component
```

or

```sh
yarn add react-accessibility-component
```

## Usage

Import and use the component in your React application:

```tsx
import '@krasnoff/react-accessibility-component/dist/react-accessibility-component.css';
import { AccessibilityComponent as AccessibilityComponentBase } from "@krasnoff/react-accessibility-component";

const AccessibilityComponent = AccessibilityComponentBase as React.FC<React.PropsWithChildren>;

function App() {
    // need to implement this handler to listen to the events emitted by the accessibility component
    useEffect(() => {
      const handler = (e: Event) => {
        const { message, value } = (e as CustomEvent).detail;
        console.log(message, value);
        // message can be: "OpenCloseComponent", "grayScale", "contrast",
        // "fontSizeIndex", "brightBackground", "readableFonts",
        // "markHyperlinks", "listsMark", "titlesMark"
      };
      window.addEventListener("shadow-click", handler);
      return () => window.removeEventListener("shadow-click", handler);
    }, []);

    return (
      <>
        <h1>Vite + React to NPM repository</h1>
        </AccessibilityComponent />
      </>
  )
}

export default App
```

Alternatively, you can add the following css file to the `index.html` file in your project instead of importing it in the App component:

```html
<link rel="stylesheet" href="node_modules/react-accessibility-component/dist/react-accessibility-component.css" />
```

## Important Notice

Using `AccessibilityComponent` alone does not guarantee full accessibility compliance. It is the responsibility of developers to build their web applications following the WCAG accessibility standards. This includes proper semantic HTML, keyboard navigability, sufficient color contrast, and providing alternative text for images, among other requirements.

For comprehensive guidance on making your website accessible, refer to the official [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) guidelines.

## License

This component is open-source and available under the MIT License.
