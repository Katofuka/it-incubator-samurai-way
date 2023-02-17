export const required = (value: string) => value ? undefined : 'Required'


const minValue = (minValue: number) =>
    (value: string) => value && value.length < minValue ? `Must be at least ${minValue} characters` : undefined


export const minValue5 = minValue(5)

