import React from 'react';
import "@/app/globals.css";
import { Meta, StoryObj } from "@storybook/react";
import { Circle, ChevronsDown, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/button/button';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' },
            ],
        },
        docs: {
            description: {
                component: 'This is a custom Button component used throughout the application for consistent styling and functionality.',
            },
            page: () => (
                <>
                    <h1>Button Component</h1>
                    <p>
                        This is a custom Button component used throughout the application for consistent styling and functionality. It provides a consistent experience and allows customization via props like <code>variant</code>, <code>loading</code>, and <code>loadingIndicator</code>.
                    </p>

                    <h2>Usage</h2>
                    <pre>
                        {`<Button variant="hover" loading={true}>Click Me</Button>`}
                    </pre>

                    <h2>Props</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Prop</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>label</code></td>
                                <td><code>string</code></td>
                                <td>The text to display inside the button.</td>
                            </tr>
                            <tr>
                                <td><code>variant</code></td>
                                <td><code>'default' | 'hover' | 'focused' | 'disabled'</code></td>
                                <td>Defines the button's style. Options are: <code>default</code>, <code>hover</code>, <code>focused</code>, <code>disabled</code>.</td>
                            </tr>
                            <tr>
                                <td><code>className</code></td>
                                <td><code>string</code></td>
                                <td>Custom class names to style the button.</td>
                            </tr>
                            <tr>
                                <td><code>disabled</code></td>
                                <td><code>boolean</code></td>
                                <td>Disables the button.</td>
                            </tr>
                            <tr>
                                <td><code>loading</code></td>
                                <td><code>boolean</code></td>
                                <td>Shows a loading indicator when set to <code>true</code>.</td>
                            </tr>
                            <tr>
                                <td><code>loadingIndicator</code></td>
                                <td><code>'spinner' | 'logo'</code></td>
                                <td>Defines the type of loading indicator. Options: <code>spinner</code>, <code>logo</code>.</td>
                            </tr>
                            <tr>
                                <td><code>CustomLoadingComponent</code></td>
                                <td><code>React.ComponentType</code></td>
                                <td>Custom component for loading indicator.</td>
                            </tr>
                            <tr>
                                <td><code>leftIcon</code></td>
                                <td><code>LucideIcon</code></td>
                                <td>Left icon to display inside the button.</td>
                            </tr>
                            <tr>
                                <td><code>rightIcon</code></td>
                                <td><code>LucideIcon</code></td>
                                <td>Right icon to display inside the button.</td>
                            </tr>
                            <tr>
                                <td><code>onClick</code></td>
                                <td><code>() =&gt; void</code></td>
                                <td>Callback function for button click event.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Variants</h2>
                    <p>The <code>variant</code> prop defines the visual style of the button. Available options include:</p>
                    <ul>
                        <li><strong>default</strong>: Standard button with primary color.</li>
                        <li><strong>hover</strong>: Button with a hover effect.</li>
                        <li><strong>focused</strong>: Button with a focus ring.</li>
                        <li><strong>disabled</strong>: Button in a disabled state.</li>
                    </ul>

                    <h2>Custom Loading Indicators</h2>
                    <p>When the <code>loading</code> prop is set to <code>true</code>, the button can display a loading indicator. The <code>loadingIndicator</code> prop controls the type of indicator shown:</p>
                    <ul>
                        <li><strong>spinner</strong>: Displays a spinning loader icon.</li>
                        <li><strong>logo</strong>: Displays a custom logo (if provided in <code>CustomLoadingComponent</code>).</li>
                    </ul>

                    <h2>Example Stories</h2>
                    <h3>Default Button</h3>
                    <pre>{`<Button label="Button CTA" variant="default" leftIcon={Circle} rightIcon={Circle} />`}</pre>

                    <h3>Hover Button</h3>
                    <pre>{`<Button label="Button CTA" variant="hover" leftIcon={Circle} rightIcon={Circle} />`}</pre>

                    <h3>Focused Button</h3>
                    <pre>{`<Button label="Button CTA" variant="focused" leftIcon={Circle} rightIcon={Circle} />`}</pre>

                    <h3>Disabled Button</h3>
                    <pre>{`<Button label="Button CTA" variant="disabled" leftIcon={Circle} rightIcon={Circle} />`}</pre>

                    <h3>Button with Different Icons</h3>
                    <pre>{`<Button label="Button CTA" leftIcon={ArrowLeft} rightIcon={ChevronsDown} />`}</pre>

                    <h3>Loading Button with Spinner</h3>
                    <pre>{`<Button label="Button CTA" loading={true} loadingIndicator="spinner" leftIcon={Circle} rightIcon={Circle} />`}</pre>
                </>
            ),
        }
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'hover', 'focused', 'disabled'],
        },
        loading: {
            control: 'boolean',
        },
        loadingIndicator: {
            control: 'radio',
            options: ['spinner', 'logo'],
        },
    },
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        label: 'Submit Button',
        variant: 'default',
        leftIcon: Circle,
        rightIcon: Circle,
        onClick: () => {
            action('Default Button Clicked')('with default state');
        },
    },
};

export const Hover: Story = {
    args: {
        label: 'Button CTA',
        variant: 'hover',
        leftIcon: Circle,
        rightIcon: Circle,
    },
};

export const Focused: Story = {
    args: {
        label: 'Button CTA',
        variant: 'focused',
        leftIcon: Circle,
        rightIcon: Circle,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Button CTA',
        variant: 'disabled',
        leftIcon: Circle,
        rightIcon: Circle,
    },
};

export const WithDifferentIcons: Story = {
    args: {
        label: 'Button CTA',
        leftIcon: ArrowLeft,
        rightIcon: ChevronsDown,
    },
};

export const LoadingWithSpinner: Story = {
    args: {
        label: 'Button CTA',
        loading: true,
        loadingIndicator: 'spinner',
        leftIcon: Circle,
        rightIcon: Circle,
    },
};