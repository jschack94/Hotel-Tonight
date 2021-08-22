const context = require("./context")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new context.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
