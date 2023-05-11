export const required = (isInput: boolean) => (value: string) =>
    value
        ? undefined
        : isInput
            ? 'Required'
            : 'Should have something'

export const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = (min: number) => (value: string) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined