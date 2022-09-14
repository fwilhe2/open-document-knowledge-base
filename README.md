# Document Template

This repo is an opinionated template for documents based on the [AsciiDoc](https://asciidoctor.org/) language.

It contains a [development container](https://code.visualstudio.com/docs/remote/containers) setup which can be used to avoid having to install ruby and Asciidoctor locally.

Inside a development container shell, the document can be built using `make`:

```
make
make pdf
make html
make doc=some-other-doc pdf
```

Using [Dev Container CLI](https://github.com/devcontainers/cli):

```
npm install -g @devcontainers/cli
devcontainer up --workspace-folder=.
devcontainer exec --workspace-folder=. make
```

The documents are also built using [devcontainers/ci](https://github.com/devcontainers/ci) in GitHub Actions.
