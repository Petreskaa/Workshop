export interface useFormInterface {
    value: string;
    onChange: (event: any) => void;
    handleValueReset?: () => void;
    revertChanges?: () => void;
    isValid?: boolean;
}