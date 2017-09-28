import Datastore from '@google-cloud/datastore';


const datastore = {
  db: Datastore({
    projectId: 'phoenix-network-181216',
  }),

  getItem: async function(kind, id) {
    const key = this.db.key([kind, id]);
    const result = await this.db.get(key);
    return result;
  },

  getAll: async function(kind, property, id) {
    const query = this.db.createQuery(kind).filter(property, '=', id);
    const results = this.db.runQuery(query);
    console.log(results);

    return results;
  },

  putItem: async function(kind, id, data) {
    const key = this.db.key([kind, id]);
    const entity = {
      key: key,
      data: data
    };
    const results = await this.db.insert(entity);
    return results;
  },

  deleteItem: async function(kind, id) {
    const key = this.db.key([kind, id]);
    const dbResults = await this.db.delete(key);
    return dbResults;
  }
};

export default datastore;
