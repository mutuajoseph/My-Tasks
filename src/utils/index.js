export const formarPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';
    const phone = phoneNumber.replace(/\D/g, '');
    if (phone.length === 10) {
        return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
    }
    return phone;
}

export const formatBirthDate = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}