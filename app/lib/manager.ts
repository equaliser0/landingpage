import Level from 'level-ts'
import { v4 as uuid } from 'uuid';
// import { writeFile, mkdir, stat } from 'fs/promises';

export class DatabaseManager {
  private database: Level.default // Database for managing other databases
  private settingsDatabase: Level.default
  private userDatabase: Level.default

  constructor() {
    this.database = new Level.default('./.db')
    this.settingsDatabase = new Level.default('./.db/settings')
    this.userDatabase = new Level.default('./.db/user')
  }

  // Database Functions
  async put(id: string, data: object) {
    try {
      return await this.database.put(id, data)
    } catch (error) {
      throw new Error(error)
    }
  }

  async exists(id: string) {
    try {
      return await this.database.exists(id, data)
    } catch (error) {
      throw new Error(error)
    }
  }

  async get(id: string) {
    try {
      const userExists = this.database.get(id)
      if (!userExists) {
        throw new Error('Document does not exist!')
      }
    } catch (error) {
      throw new Error(error)
    }
    return await this.database.get(id)
  }

  async all(id: string) {
    try {
      return await this.database.all()
    } catch (error) {
      throw new Error(error)
    }
  }

  async del(id: string) {
    try {
      return await this.database.del(email)
    } catch (error) {
      throw new Error(error)
    }
  }

  // User Functions
  async addUser(userData: object) {
    try {
      return await this.userDatabase.put(userData.id, userData)
    } catch (error) {
      throw new Error(error)
    }
  }

  async updateUser(userData: object) {
    try {
      console.log(userData);

      return await this.userDatabase.put(userData.id, userData)
    } catch (error) {
      throw new Error(error)
    }
  }

  async userExists(id: string) {
    try {
      return await this.userDatabase.exists(id)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getUser(id: string) {
    try {
      return await this.userDatabase.get(id)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getUserByMail(email: string) {
    try {
      console.log(email);

      return await this.userDatabase.find(u => u.email === email)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getAllUser() {
    try {
      return await this.userDatabase.all()
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteUser(id: string) {
    try {
      return await this.userDatabase.del(id)
    } catch (error) {
      throw new Error(error)
    }
  }

  // Settings Functions
  async updateSettings(settingsData: object) {
    try {
      return await this.settingsDatabase.put('appSettings', settingsData)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getSettings() {
    try {
      return await this.settingsDatabase.get('appSettings')
    } catch (error) {
      throw new Error(error)
    }
  }

  // Database Functions
  async createDatabase(slug: string) {
    try {
      const db = new Level.default(`./.db/${slug}`)
      const dbExists = await this.database.exists(slug)
      if (!dbExists) {
        await this.database.put(slug, {
          id: uuid(),
          created: new Date(),
          updated: new Date(),
          name: slug,
          path: slug,
          slug: slug,
        })
      }
      return db
    } catch (error) {
      throw new Error(error)
    }
  }

  async getAllDatabases() {
    try {
    return await this.database.all()
    } catch (error) {
      throw new Error(error)
    }
  }

  async accessDatabase(slug: string) {
    try {
      return new Level.default(`./.db/${slug}`)
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteDatabase(slug: string) {
    try {
      await this.closeDatabase(slug)
      return await this.database.del(slug)
    } catch (error) {
      throw new Error(error)
    }
  }

  async closeDatabase(slug: string) {
    try {
      await this.accessDatabase(slug).close()
    } catch (error) {
      throw new Error(error)
    }
  }

  // Database Management Functions
  async closeAllDatabases() {
    await this.userDatabase.close()
    await this.settingsDatabase.close()
    await this.database.close()
  }
}
