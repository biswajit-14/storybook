export const getShadcnVariant = (variant: string) => {
    switch (variant) {
        case 'hover':
            return 'default';
        case 'focused':
            return 'default';
        case 'disabled':
            return 'secondary';
        default:
            return 'default';
    }
};

export const getStateClasses = (variant: string) => {
    switch (variant) {
        case 'hover':
            return 'bg-primary/90 text-primary-foreground';
        case 'focused':
            return 'ring-2 ring-primary ring-offset-2 ring-offset-primary/10 outline outline-2 outline-black';
        case 'disabled':
            return 'bg-[#F2F4F7] text-black';
        default:
            return 'bg-primary text-white';
    }
};