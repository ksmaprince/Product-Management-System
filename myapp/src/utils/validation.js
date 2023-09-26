const addValidation = (formData) => {
    const formFields = Object.keys(formData);
    let newFormValues = { ...formData }

    for (let index = 0; index < formFields.length; index++) {
        const currentField = formFields[index];
        const currentValue = formData[currentField].value;

        if (currentValue === '') {
            newFormValues = {
                ...newFormValues,
                [currentField]: {
                    ...newFormValues[currentField],
                    error: true
                }
            }
        } else {
            newFormValues = {
                ...newFormValues,
                [currentField]: {
                    ...newFormValues[currentField],
                    error: false
                }
            }
        }
    }
    return newFormValues;
}

export default addValidation;