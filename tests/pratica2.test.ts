import {pratica2} from "../src/pratica2"

describe("Teste pratica2.ts", () =>{
    test("A função recebe um parâmetro e retorna null caso não seja 'number'", () => {
        const result = pratica2("1" as any)

        expect(result).toBeNull()
    })

    test("A função recebe um número, se não for um número inteiro deve retornar 'null'", () =>{
        const result = pratica2(23.3)

        expect(result).toBeNull()
    })

    test("Se o número for ímpar, retorne 'false'", () => {
        const result = pratica2(5)

        expect(result).toBeFalsy()
    })

    test("Se o número for par, retorne 'true'", () => {
        const result = pratica2(2)

        expect(result).toBeTruthy()
    })
})