
export interface Letras{
    word: string[]
}

export const fixacao = (word1: string): Letras => {
    const splitWord = word1.split("")
    return {word: splitWord}
}