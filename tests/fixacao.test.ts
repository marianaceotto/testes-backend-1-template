import {fixacao} from "../src/fixacao"

describe("Testando arquivo fixacao.ts", () => {
    test("A função deve dividir a palavra 'div' em 'd', 'i' e 'v'", () => {
        const word = "dev"
        const resultExpect = { word: ["d", "i", "v"]}
        const result = fixacao(word)

        expect(result).toEqual(resultExpect)
    })
})