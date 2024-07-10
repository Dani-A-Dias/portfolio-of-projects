import React from 'react';
import aboutMeIMG from '../assets/about-me.jpeg';
import projectsImg from '../assets/projects.jpeg';

function Carousel() {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-bs-ride="carousel"
			style={{  width: '500px' }}
		>
			<div className="carousel-indicators" >
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src={aboutMeIMG}
						className="d-block w-100"
						alt="About Me"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5 className='back-dark'>About Me</h5>
						<p className='back-dark'>Know more about me.</p>
						<a
							href="/about-me"
							className="btn btn-primary"
                            style={{ backgroundColor: '#a14bb3', border:"#a14bb3" }}
						>
							Know more
						</a>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src={projectsImg}
						className="d-block w-100"
						alt="Projects"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5 className='back-dark'>Projects</h5>
						<p className='back-dark'>Take a look at my projects!</p>
						<a
							href="/projects"
							className="btn btn-primary"
                            style={{ backgroundColor: '#a14bb3', border:"#a14bb3" }}
						>
							See Projects
						</a>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default Carousel;
