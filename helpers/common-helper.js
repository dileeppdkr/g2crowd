const rp = require('request-promise');
const i18n = require('i18n');

class CommonHelper {
    async loadG2Crowd() {
        const options = {
          method: 'GET',
          uri: 'https://coding-assignment.g2crowd.com',
        //   body: {},
          json: true, // Automatically stringifies the body to JSON
        };
    
        return rp(options)
          .then((respos) => respos )
          
          .catch((err) => {
            console.log('err: ', err);
            throw new Error("error");
        });
    }

    formatResponse(data, crowdExistingLikes) {
      const result = data.map((res) => {
        let likeInfo = crowdExistingLikes.find((like) => like['name'] == res.name);
        likeInfo = likeInfo ? likeInfo['likes_count'] : 0;
        return {
          name: res.name,
          image_url: res.image_url,
          title: res.title,
          bio: res.bio,
          likes_count: likeInfo
        };
      });
      return result;
    }
}

module.exports = new CommonHelper;