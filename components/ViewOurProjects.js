import React from 'react';

import '../styles/style.scss';

const ViewOurProjects = () => {
	return (
		<div className='view__our__projects'>
			<div className='projects__header'>
				<h1>View our Projects</h1>
			</div>
			<div className='projects'>
				<div className='project'>
					<div className='image'>
						<img src='/img/projectsImage.png' />
					</div>
					<div className='project__info'>
						<h1>Luxury Vinyl Floor</h1>
						<p>
							We were very lucky to have the privilege in supplying all the floor and wall tiles for a
							house renovation in Reigate this year.We were very lucky to have the privilege in supplying
							all the floor and wall tiles for a house renovation in Reigate this year.
						</p>
						<div className='project__buttons'>
							<a href='#' className='blue__link'>
								Case Study
							</a>
							<a href='#' className='red__button'>
								View Project
							</a>
						</div>
					</div>
				</div>
				<div className='project'>
					<div className='image'>
						<img src='/img/projectsImage2.png' />
					</div>
					<div className='project__info'>
						<h1>Hollywood Vinyl Floor</h1>
						<p>
							We were very lucky to have the privilege in supplying all the floor and wall tiles for a
							house renovation in Reigate this year.We were very lucky to have the privilege in supplying
							all the floor and wall tiles for a house renovation in Reigate this year.
						</p>
						<div className='project__buttons'>
							<a href='#' className='blue__link'>
								Case Study
							</a>
							<a href='#' className='red__button'>
								View Project
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewOurProjects;
