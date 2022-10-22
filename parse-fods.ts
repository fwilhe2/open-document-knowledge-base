import { XMLParser } from 'fast-xml-parser';
import { readFileSync, writeFileSync } from 'fs';

const options = {
    ignoreAttributes: false
};

const fodsString = readFileSync('test/formula.fods').toString()

const parser = new XMLParser(options);
let jsonObj = parser.parse(fodsString);

const tableRows = jsonObj['office:document']['office:body']['office:spreadsheet']['table:table']['table:table-row']

for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
    const currentRow = tableRows[rowIndex]
    for (let cellIndex = 0; cellIndex < 3; cellIndex++) {
        const currentCell = currentRow['table:table-cell'][cellIndex]

        console.log(currentCell['@_office:value'] ? currentCell['@_office:value'] : currentCell['@_table:formula'])

    }

}

writeFileSync('formula.json', JSON.stringify(jsonObj, null, 4))