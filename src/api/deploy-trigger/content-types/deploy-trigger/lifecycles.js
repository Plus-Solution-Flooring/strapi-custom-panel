module.exports = {
  async afterUpdate(event) {
    console.log('🔥 LIFECYCLE DISPARADO', event.result);

    const { result } = event;

    if (result.trigger === true) {
      try {
        console.log('URL del hook:', process.env.CLOUDFLARE_DEPLOY_HOOK_URL);
        await fetch(process.env.CLOUDFLARE_DEPLOY_HOOK_URL, {
          method: 'POST',
        });
        strapi.log.info('Rebuild disparado en Cloudflare Pages ✅');
      } catch (err) {
        strapi.log.error('Error disparando el rebuild', err);
      }
    } else {
      console.log('trigger es false, no se dispara nada');
    }
  },
};