import { inputsAreValid } from './utils/inputsAreValid'
import { parseInputs } from './utils/parseInputs'

export const run = (alertService, componentService) => {
    alertService.hideErrors()

    componentService.onClick(() => {
        alertService.hideErrors()
        const inputs = componentService.getInputs()
        const parsedInputs = parseInputs(...inputs)
        if(inputsAreValid(...parsedInputs)){
            const [numA, numB] = parsedInputs
            componentService.setResult(numA + numB)
        }else{
            componentService.setResult('')
            alertService.handleAdditionErrors(inputs, parsedInputs)
        }
    })
}
