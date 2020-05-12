# Energy Piazza Curated Resources List

This is a list of categorised resources for the sustainable energy sector.

It is published as a Github pages website in [here](https://piazza.energy/curated-resource-list/)

## migration to nextjs

regex

`^-(.*?)\[(.*?)\]\((.*?)\)(.*)$`

replace with

```{
  "title": "$2", 
  "url": "$3",
  "description": "$1 $2 $4"
},```

sample output, full

```{
  "data": [
    {
      "title": "A clever website",
      "url": "https://www.google.com/",
      "description": "Founded by 2 students at <a href=\"https://www.stanford.edu/\">Stanford</a>",
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
}```
