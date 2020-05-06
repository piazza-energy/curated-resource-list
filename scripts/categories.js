import fs from 'fs'
import path from 'path'


export function getCategories() {
  const catDir = path.join(process.cwd(), 'public', 'data', 'category');
  const filenames = fs.readdirSync(catDir)
  const categories = filenames.map(filename => {
    if (filename.endsWith('.json')) {
      return filename.replace('\.json', '');
    }
  })
  return categories;
}
