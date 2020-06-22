# Energy Piazza Curated Resources List

This is a list of categorised resources for the sustainable energy sector.

It is published as a Github pages website in [here](https://piazza.energy/curated-resource-list/)

## how it works

basically a bookmark manager developed with next.js and published as static html on github pages.

bookmarks are grouped in categories under the `public/data/category` folder, each link can define a list of tags in addition to standard fields (see below).

### publish

1. setup the repo to read its github pages from the `/docs` folder 
2. change data in the category folder
3. run the makefile commands to publish an update

```shell
# use next.js static html rendering function to export current version to /docs
make prepare
# commit with current timestamp
make publish
# update github pages
git push
```

### develop

```shell
npm install
npm run dev
```

## migration to next.js

conversion from original markdown using regex

`^-(.*?)\[(.*?)\]\((.*?)\)(.*)$`

matches replaced with

```javascript
{
  "title": "$2", 
  "url": "$3",
  "description": "$1 $2 $4"
}
```

sample output, full (markdown links in description fields are correctly rendered)

```javascript
{
  "data": [
    {
      "title": "A clever website",
      "url": "https://www.google.com/",
      "description": "Founded by 2 students at [Stanford](https://www.stanford.edu/)",
      "thumb": null,
      "tags": ["search engine"]
    },
    {
      "title": "A cool website",
      "url": "https://www.facebook.com/",
      "description": "Founded by a guy with the worst haircuts ever",
      "thumb": null,
      "tags": ["social network"]
    }
  ]
}
```
