const CANONICAL_HOST = 'www.velvetclean.pl';

export default {
  /** @param {Request} request @param {{ ASSETS: { fetch: typeof fetch } }} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    // version previews (<id>-velvet-clean.<sub>.workers.dev) and local dev stay where they are
    const keepHost = /-velvet-clean\.[^.]+\.workers\.dev$/.test(url.hostname) || url.hostname === 'localhost' || url.hostname === '127.0.0.1';

    // velvetclean.pl, the workers.dev address and plain http all move to https://www.velvetclean.pl
    if (!keepHost && (url.hostname !== CANONICAL_HOST || url.protocol !== 'https:')) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    // hashed build files never change under the same name
    if (url.pathname.startsWith('/_astro/') && response.ok) {
      const cached = new Response(response.body, response);
      cached.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      return cached;
    }
    return response;
  },
};
