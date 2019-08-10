import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import MainLayout from '../layout';
import { MetaData } from '../components/meta';

const Post = ( { data, location } ) => {
	const post = data.ghostPost;

	return (
		<React.Fragment>
			<MetaData data={data} location={location} type="article" />
			<Helmet>
				<style type="text/css">{`${post.codeinjection_styles}`}</style>
			</Helmet>

			<MainLayout>
				<div className="container">
					<article className="content">
						{post.feature_image ? (
							<figure className="post-feature-image">
								<img src={post.feature_image} alt={post.title} />
							</figure>
						) : null}
						<section className="post-full-content">
							<h1 className="content-title">{post.title}</h1>

							{/* The main post content */}
							<section
								className="content-body load-external-scripts"
								dangerouslySetInnerHTML={{ __html: post.html }}
							/>
						</section>
					</article>
				</div>
			</MainLayout>
		</React.Fragment>
	);
};

Post.propTypes = {
	data: PropTypes.shape( {
		ghostPost: PropTypes.shape( {
			title: PropTypes.string.isRequired,
			html: PropTypes.string.isRequired,
			feature_image: PropTypes.string
		} ).isRequired
	} ).isRequired,
	location: PropTypes.object.isRequired
};

export default Post;

export const postQuery = graphql`
	query($slug: String!) {
		ghostPost(slug: { eq: $slug }) {
			...GhostPostFields
		}
	}
`;
