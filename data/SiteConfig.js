const config = {
	siteTitle: 'Ukemi - Movement Design Specialists',
	siteTitleShort: 'Ukemi Ltd.', // Short site title under 12 characters to prevent truncation.
	siteTitleAlt: 'Ukemi Movement Design', // Alternative site title for SEO.
	siteLogo: '/logos/logo-1024.png',
	siteUrl: 'https://ukemi.ninja',
	pathPrefix: '',
	siteDescription: 'Ukemi project blah', // TODO
	siteRss: '/rss.xml',
	siteFBAppID: '', // TODO
	googleAnalyticsID: '', // TODO
	// disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter',
	dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
	dateFormat: 'DD/MM/YYYY', // Date format for display.
	userLinks: [
		{
			label: 'GitHub',
			url: 'https://github.com/KyteProject',
			iconClassName: 'fa fa-github'
		},
		{
			label: 'Twitter',
			url: 'https://twitter.com/UkemiProject',
			iconClassName: 'fa fa-twitter'
		},
		{
			label: 'Email',
			url: 'mailto:support@ukemi.ninja',
			iconClassName: 'fa fa-envelope'
		}
	],
	copyright: 'Copyright © 2019. Ukemi',
	themeColor: '#c62828', // Used for setting manifest and progress theme colors.
	backgroundColor: '#e0e0e0', // Used for setting manifest background color.
	postsPerPage: 12 // Blog Pagination
};

if ( config.pathPrefix === '/' ) {
	config.pathPrefix = '';
} else {
	config.pathPrefix = `/${config.pathPrefix.replace( /^\/|\/$/g, '' )}`;
}

if ( config.siteUrl.substr( -1 ) === '/' ) {
	config.siteUrl = config.siteUrl.slice( 0, -1 );
}

if ( config.siteRss && config.siteRss[ 0 ] !== '/' ) {
	config.siteRss = `/${config.siteRss}`;
}

module.exports = config;
