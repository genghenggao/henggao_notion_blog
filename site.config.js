/*
 * @Description: henggao_note
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2022-03-02 21:35:44
 * @LastEditors: henggao
 * @LastEditTime: 2022-03-03 09:44:31
 */
module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '5a5f47726906499684f172c916bf4a37',
  // rootNotionPageId: '4f96eb673c5a4caa8618db4d45db84e7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Henggao Blog',
  // domain: 'henggao-notion-blog.vercel.app',
  domain: 'blog.genghenggao.top',
  author: 'Henggao Geng',

  // open graph metadata (optional)
  description: 'Henggao record',
  socialImageTitle: 'Henggao',
  socialImageSubtitle: 'Henggao record',

  // social usernames (optional)
  twitter: 'genghenggao',
  github: 'genghenggao',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'genghenggao/henggao_notion_blog',
  utterancesGitHubLabel: 'Blog Comment',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
