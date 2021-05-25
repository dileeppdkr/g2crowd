
const crowdHelper = require('../helpers/common-helper')
const i18n = require('i18n');
const Like = require('../models/like')

class Voting {
    async getG2Crowd() {
        try {
          const data = await crowdHelper.loadG2Crowd();
          const names = data.map((crowd) => { return crowd.name })
          const crowdExistingLikes = await this.getCrowdLikes(names);
          return crowdHelper.formatResponse(data,crowdExistingLikes);
        } catch (error) {
          console.log('error: ', error);
          throw new Error(i18n.__('CrowdNotFound'));
        }
    }

    async addOrUpdateLikes(name) {
      try {
        await Like.findOneAndUpdate({name: name}, {$inc: {likes_count: 1}}, { upsert: true });
      } catch (error) {
        console.log('error: ', error);
        throw new Error('No record Found');
      }
    }

    async getCrowdLikes(names) {
      return Like.find({
        'name': {$in: names}
      });
    }
}

module.exports = new Voting();