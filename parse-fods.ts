import { XMLParser } from 'fast-xml-parser';
import { readFileSync, writeFileSync } from 'fs';

const options = {
    ignoreAttributes: false
};

const fodsString = readFileSync('test/formula.fods').toString()

const parser = new XMLParser(options);
let jsonObj = parser.parse(fodsString);

const tableRows = jsonObj['office:document']['office:body']['office:spreadsheet']['table:table']['table:table-row']


type formula = string
type value = string

type cell = {formula: formula} | {value: value}

type row = cell[]
type table = row[]

function getCellText(c: any): string {
    return c['@_office:value'] ? c['@_office:value'] : c['@_table:formula']
}

const tableJson = tableRows.map((r: any) => (r['table:table-cell'].map((c: any) => (getCellText(c)))))

console.log(JSON.stringify(tableJson))

const tableHtml = '<table>' + tableRows.map((r: any) => ('<tr>' + r['table:table-cell'].map((c: any) => (`<td> <input type="text" value="${getCellText(c)}"> </input> </td>`)).join('\n') + '</tr>')).join('\n') + '</table>'


writeFileSync('formula.json', JSON.stringify(jsonObj, null, 4))
writeFileSync('formula.html', tableHtml)