import { faker } from "@faker-js/faker";

export const isKeyboardCodeAllowed = (code: string) => {
    return (
        code.startsWith("Key") ||
        code.startsWith("Digit") ||
        code === "Backspace" ||
        code === "Space"
    );
};


export const GenerateWords = (numberOfWords: number) => {
    return faker.word.words(numberOfWords);
}

