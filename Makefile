TODAY := $(shell date +%FT%T%Z)

help:
	@echo "available commands:"
	@echo "make prepare - export a static version"
	@echo "make publish - publish to github pages"

prepare:
	rm -rf docs/
	npm run build
	npm run export
	touch out/.nojekyll
	mv out docs

publish:
	git add --all
	git commit -m "new publish $(TODAY)"
