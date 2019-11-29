import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

export const TitleSection = ( { location, sub, crumbLabel } ) => {
	return (
		<section className="section-title">
			<Container>
				<Row>
					<Col lg="12">
						<div className="text-center">
							<h2>{crumbLabel}</h2>

							<Breadcrumb>
								<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
								{sub && <Breadcrumb.Item href={`/${sub.slug}`}>{sub.label}</Breadcrumb.Item>}
								<Breadcrumb.Item active>{crumbLabel}</Breadcrumb.Item>
							</Breadcrumb>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};