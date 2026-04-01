# Simplified Flat Open Document Spreadsheet

Playground for a simplified flat ods format which is more friendly towards writing by hand and producing sensible git diffs when data is added or changed.

Only supports a small subset of what ods supports by intention.

Conversion between fods/ods and sfods should be trivially possible both ways.
Loss of metadata when converting fods/ods to sfods is acceptable, what's important is that the spreadsheet cells, formulas and named ranges stay intact.

The purpose of sfods is to be a format that's suitable for scripted creation and git versioning of spreadsheet data, for example for automated accounting use-cases.
