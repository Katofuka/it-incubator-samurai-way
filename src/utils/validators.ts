export const required = (value: string) => value ? undefined : 'Required'


const minValue = (minValue: number) =>
    (value: string) => value && value.length < minValue ? `Must be at least ${minValue} characters` : undefined

export const email = (value:string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const minValue5 = minValue(5)
export const minValue8 = minValue(8)

