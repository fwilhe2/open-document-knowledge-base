doc=my-document
OPTIONS=--destination-dir=output

all: html pdf

html:
	asciidoctor -a data-uri $(OPTIONS) $(doc).adoc

pdf:
	asciidoctor-pdf $(OPTIONS) $(doc).adoc

clean:
	rm -rf output

.PHONY: clean