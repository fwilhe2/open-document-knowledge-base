import { readFile, writeFile } from "node:fs/promises";

const raw: string = (await readFile('functions/functions_raw.txt')).toString()

type returnClass = 'value' | 'reference' | 'array'

function parseReturnClass(s: string): returnClass {
    if (s === 'V') {
        return 'value'
    }

    if (s === 'A') {
        return 'array'
    }

    if (s === 'R') {
        return 'reference'
    }

    throw new Error()
}

type fn = {
    name: string
    originalName: string
    minParam: number
    maxParam: number
    returnClass: returnClass
}

function mapLine(line: string) {
    const [odfName, ooxName, biff12FunctionId, biffOldFunctionId, minNumParams, maxNumParams, biffReturnClass, functionParamInfo, flags] = line.split(',')
    const originalName = odfName.replaceAll('"', '')
    const name = originalName.replaceAll('.', '_')
    const minParam = Number(minNumParams)
    const maxParam = Number(maxNumParams)
    console.log(name)
    const returnClass = parseReturnClass(biffReturnClass.replaceAll(' ', ''))
    return {
        name,
        originalName,
        minParam,
        maxParam,
        returnClass
    }
}

const functionTemplate = "function NAME(params: any[]){return `ORIGINAL_NAME(${params.join(';')})`}"

const parsed = raw.split('\n').filter(l => l.length > 1).map(mapLine)

console.log(JSON.stringify(parsed))

function generateCodeForFunction(f: fn): string {
    return functionTemplate.replace('NAME', f.name).replace('ORIGINAL_NAME', f.originalName)
}

const generated = parsed.map(generateCodeForFunction).join('\n\n')

console.log(generated)

await writeFile('functions/generated.ts', generated)

export default {}