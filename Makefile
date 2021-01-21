TODAY := $(shell date +%FT%T%Z)

help:
	@echo "available commands:"
	@echo "make build - build website + export a static version"
	@echo "make commit - add all and commit. Manually run 'git push' to publish"
	@echo "make serve - start a http server in the /docs folder"

build:
	rm -rf docs/
	npm run build
	npm run export
	touch out/.nojekyll
	mv out docs

serve:
	cd docs && python -m http.server

commit:
	git add --all
	git commit -m "new publish $(TODAY)"
