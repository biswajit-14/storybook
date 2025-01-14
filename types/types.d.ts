export type ButtonVariant = 'default' | 'hover' | 'focused' | 'disabled';
export type ButtonLoadingIndicator = 'spinner' | 'logo';

export interface ButtonProps {
    label: string;
    variant?: ButtonVariant;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    loadingIndicator?: ButtonLoadingIndicator;
    CustomLoadingComponent?: React.ComponentType;
    leftIcon?: LucideIcon;
    rightIcon?: LucideIcon;
    onClick?: () => void;
}