import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccessibilityComponent } from './react-accessibility-component';

const meta = {
  title: 'Accessibility/ReactAccessibilityComponent',
  component: AccessibilityComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccessibilityComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
    <h1>Accessibility Demo Page</h1>
    <p>
      This page gives you headings, links, and lists so you can quickly validate
      the component behavior in Storybook.
    </p>

    <h2>Quick Links</h2>
    <p>
      Visit <a href="https://storybook.js.org/" target="_blank" rel="noreferrer">Storybook Docs</a> and{' '}
      <a href="https://react.dev/" target="_blank" rel="noreferrer">React Docs</a>.
    </p>

    <h2>Sample List</h2>
    <ul>
      <li>Increase and decrease font size</li>
      <li>Mark links and titles</li>
      <li>Switch contrast and grayscale modes</li>
    </ul>

    <AccessibilityComponent />
  </main>
);

export const Playground: Story = {
  render: () => <DemoContent />,
};
