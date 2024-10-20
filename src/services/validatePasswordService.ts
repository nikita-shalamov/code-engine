const validatePassword = (value: string) => {
    if (value.length < 8) {
        return "Пароль должен содержать минимум 8 символов";
    } else if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
        return "Пароль должен содержать минимум одну большую, маленькую букву и цифру";
    }
    return true;
};

export default validatePassword