import fs from 'fs'
import path from 'path'
import { slugify } from './string-utils';


const getCatFilenames = function() {
  // returns all files in the category folder
  const catDir = path.join(process.cwd(), 'public', 'data', 'category');
  return fs.readdirSync(catDir);
}

export function getCategories() {
  // returns an array of all categories
  const categories = [];
  for (const filename of getCatFilenames()) {
    if (filename.endsWith('.json')) {
      categories.push(filename.replace('\.json', ''));
    }
  }
  return categories;
}

export function getCatData(catName) {
  // returns an array with all the bookmarks in the specified category
  const catFile = path.join(process.cwd(), 'public', 'data', 'category', `${catName}.json`);
  const catContent = fs.readFileSync(catFile, 'utf8');
  const data = JSON.parse(catContent).data;
  return data;
}

export function getAllCatsData(categories) {
  // returns an object with keys == cats and values == array of bookmarks in that cat
  let output = {};
  for (const cat of categories) {
    output[cat] = getCatData(cat);
  }
  return output;
}

export function getAllTagsData(allCatsData) {
  let output = {};
  for (const cat in allCatsData) {
    const bookmarks = allCatsData[cat];
    for (const bookmark of bookmarks) {
      if (bookmark.tags) {
        for (const tag of bookmark.tags) {
          const tagSlug = slugify(tag);
          if (output[tagSlug] === undefined) {
            output[tagSlug] = [];
          }
          output[tagSlug].push(bookmark);
        }
      }
    }
  }
  return output;
}
