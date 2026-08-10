module.exports = {
  async afterUpdate(event) {
    try {
      await fetch(process.env.CLOUDFLARE_DEPLOY_HOOK_URL, {
        method: 'POST',
      });
      strapi.log.info('Rebuild disparado en Cloudflare Pages ✅');
    } catch (err) {
      strapi.log.error('Error disparando el rebuild', err);
    }
  },
};