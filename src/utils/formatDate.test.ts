import * as formatDate from "./formatDate"
// @ponicode
describe("formatDate.default", () => {
    test("0", () => {
        let param1: any = new Date("01-01-2020")
        let callFunction: any = () => {
            formatDate.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1: any = new Date("32-01-2020")
        let callFunction: any = () => {
            formatDate.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1: any = new Date("01-01-2030")
        let callFunction: any = () => {
            formatDate.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1: any = new Date("01-13-2020")
        let callFunction: any = () => {
            formatDate.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1: any = new Date("")
        let callFunction: any = () => {
            formatDate.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })
})
