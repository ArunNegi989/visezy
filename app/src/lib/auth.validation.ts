export const validatePassword = (
    password: string
) => {
    return {
        length:
            password.length >= 8,

        uppercase:
            /[A-Z]/.test(password),

        lowercase:
            /[a-z]/.test(password),

        number:
            /[0-9]/.test(password),

        special:
            /[!@#$%^&*(),.?":{}|<>]/.test(
                password
            ),
    };
};

export const isStrongPassword = (
    password: string
) => {
    const validation =
        validatePassword(password);

    return Object.values(
        validation
    ).every(Boolean);
};