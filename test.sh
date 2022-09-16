mkdir -p output
libreoffice --headless --convert-to csv:"Text - txt - csv (StarCalc)":"44,34,76,1,,1031,true,true" test/minimal.fods --outdir output
libreoffice --headless --convert-to csv:"Text - txt - csv (StarCalc)":"44,34,76,1,,1031,true,true" test/formula.fods --outdir output
libreoffice --headless --convert-to csv:"Text - txt - csv (StarCalc)":"44,34,76,1,,1031,true,true" test/named-range.fods --outdir output

cat output/*