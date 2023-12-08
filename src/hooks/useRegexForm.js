import { useState } from "react";

const useRegexForm = () => {

    const [form, setForm] = useState({
        name: { value: "", isValid: false },
        email: { value: "", isValid: false },
        password: { value: "", isValid: false },
        confirmPassword: { value: "", isValid: false }
    });

    const [currentPaswordStepSecurity, setCurrentPaswordStepSecurity] = useState(0);

    const checkEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    const checkPassword = (password) => {
        const hasNumbers = /\d/.test(password);
        const hasMixed = /[a-z]/.test(password) && /[A-Z]/.test(password);
        const hasSpecial = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
        const isLong = password.length >= 8;

        if (isLong && hasNumbers && hasMixed && hasSpecial) {
            setCurrentPaswordStepSecurity(4);
        } else if (isLong && hasNumbers && hasMixed) {
            setCurrentPaswordStepSecurity(3);
        } else if (isLong && hasNumbers) {
            setCurrentPaswordStepSecurity(2);
        } else if (isLong) {
            setCurrentPaswordStepSecurity(1);
        }

        return isLong
    }

    const checkName = (name) => {
        const regex = /^[a-zA-Z]{2,}$/;
        return regex.test(name);
    }

    const isValidEmail = (email) => {
        return email.length > 0 && checkEmail(email);
    }

    const isValidPassword = (password) => {
        return password.length > 0 && checkPassword(password);
    }

    const isValidConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    }

    const isValidName = (name) => {
        return name.length > 0 && checkName(name);
    }

    const handleCheckEmail = (email) => {
        const isValid = isValidEmail(email);
        setForm({ ...form, email: { value: email, isValid } });
    }

    const handleCheckPassword = (password) => {
        const isValid = isValidPassword(password);
        setForm({ ...form, password: { value: password, isValid } });
    }

    const handleCheckPasswordConfirm = (password, confirmPassword) => {
        const isValid = isValidConfirmPassword(password, confirmPassword);
        setForm({ ...form, confirmPassword: { value: confirmPassword, isValid } });
    }

    const handleCheckName = (name) => {
        const isValid = isValidName(name);
        setForm({ ...form, name: { value: name, isValid } });
    }

    const handleCheckField = (field, value) => {
        switch (field) {
            case 'email':
                handleCheckEmail(value);
                break;
            case 'password':
                handleCheckPassword(value);
                break;
            case 'confirmPassword':
                handleCheckPasswordConfirm(form.password.value, value);
                break;
            case 'name':
                handleCheckName(value);
                break;
            default:
                break;
        }
    }

    const handleResetForm = () => {
        setForm({
            name: { value: "", isValid: false },
            email: { value: "", isValid: false },
            password: { value: "", isValid: false },
            confirmPassword: { value: "", isValid: false }
        });
    }

    return {
        form,
        handleCheckField,
        handleResetForm,
        currentPaswordStepSecurity
    }
}

export default useRegexForm;