import crypto from 'crypto';

export function generateHashedPassword(password) {
    const hash = crypto.createHash("sha256").update(password).digest();
    return hash.toString("hex");
}

export function validatePassword(password, hashedPassword) {
    const hash = crypto.createHash("sha256").update(password).digest();
    return hash.toString("hex") === hashedPassword;
}