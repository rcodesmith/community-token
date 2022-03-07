// migrations/2_deploy.js
const BuilderCommunityToken = artifacts.require('BuilderCommunityToken');

module.exports = async function (deployer) {
  await deployer.deploy(BuilderCommunityToken);
};

