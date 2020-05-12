TODAY := $(shell date +%FT%T%Z)

help:
	@echo "available commands:"
	@echo "make publish - export a static version and publish to github pages"

publish:
	rm -rf docs/
	npm run build
	npm run export
	touch out/.nojekyll
	mv out docs
	git add --all
	git commit -m "new publish $(TODAY)"
