import Level from 'level-ts'

const database = new Level.default('./.db') // TODO Fix
const userDatabase = new Level.default('./.db/user') // TODO Fix
const filesDatabase = new Level.default('./.db/files') // TODO Fix
const contentDatabase = new Level.default('./.db/content') // TODO Fix
// const blogDatabase = new Level.default('./.db/blog') // TODO Fix
const shopDatabase = new Level.default('./.db/shop') // TODO Fix

export const useDatabase = () => {
  return database
}

export const useUserDatabase = () => {
  return userDatabase
}

export const useFilesDatabase = () => {
  return filesDatabase
}

export const useContentDatabase = () => {
  return contentDatabase
}

// export const useBlogDatabase = () => {
//   return blogDatabase
// }

export const useShopDatabase = () => {
  return shopDatabase
}

export class Database extends Level.default {
  constructor(path) {
    super(path)
  }
}
