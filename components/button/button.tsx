import './button.scss'
import React from 'react';
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react'
import { Button as ShadcnButton } from "@/components/ui/button"
import { ButtonLoadingIndicator, ButtonProps } from '@/types/types';
import { getShadcnVariant, getStateClasses } from '@/utils/helper-function';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        label,
        variant = 'default',
        className,
        disabled,
        loading = false,
        loadingIndicator = 'spinner',
        CustomLoadingComponent,
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        onClick,
        ...props
    }) => {
        return (
            <ShadcnButton
                variant={getShadcnVariant(variant)}
                disabled={disabled || variant === 'disabled'}
                onClick={onClick}
                className={cn(
                    "inline-flex px-3 py-2 justify-center items-center gap-1",
                    "rounded-[625rem] bg-primary",
                    getStateClasses(variant),
                    className,
                    "button-styles"
                )}
                {...props}
            >
                {loading ? (
                    renderLoadingIndicator(
                        loading,
                        loadingIndicator,
                        CustomLoadingComponent
                    )
                ) : (
                    <>
                        {LeftIcon && <LeftIcon className="h-5 w-5" />}
                        <span className="text-white text-sm font-semibold leading-5 font-inter text-shadow">
                            {label}
                        </span>
                        {RightIcon && <RightIcon className="h-5 w-5" />}
                    </>
                )}
            </ShadcnButton>
        );
    }
);

const renderLoadingIndicator = (
    loading: boolean,
    loadingIndicator: ButtonLoadingIndicator,
    CustomLoadingComponent?: React.ComponentType
) => {
    if (!loading) return null;

    if (loadingIndicator === 'spinner') {
        return <Loader2 className="h-4 w-4 animate-spin" />;
    }

    if (CustomLoadingComponent) {
        return <CustomLoadingComponent />;
    }

    return null;
};