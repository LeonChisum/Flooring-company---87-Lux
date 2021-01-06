import "../styles/style.scss";

const Services = () => {
  return (
    <div>
      <div className="services"></div>
      <h1>Services we offer</h1>
import { Fragment } from 'react';
import '../styles/style.scss';
import { BsChevronRight } from 'react-icons/bs';

const Services = () => {
	return (
		<div>
		
		<div className="services">
	
			<h1>Services we offer</h1>
		</div>
		

			<div>
			<br></br>
			<div className="firstp">
			
		
			<p>we offer a wide range of flooring services, and high quality installation services at affordable</p> 
			
			
			<p>prices.The wide of services we offer help our customers get what they need, at the highest</p>
			<p className="twowords">quality possible</p>
			
			
			<br></br>
		</div>
		
    
		
		
			
			
		<div>
		<div>
		
		
			
			
		</div>
			<div>
			<br></br>
			<img className="squarepic"src='./square.png' />
			
			<div className="secondp">
			<h1 className="lux">Luxury Vinyl</h1>
			<br></br>
			<p>Luxury vinyl is one of the most durable flooring options out there. it can</p>
			<p>withstand water and moisture, as well as wear and tear. It is also stain and</p>
			<p>scratch resistant. This durability makes it an ideal flooring option.</p>		
            <br></br>
			
			<a className="bookservice2" href="/contactus">Book Service</a><BsChevronRight className="bookservice"/>

		    
			<br></br>
		</div>
		</div>
		</div>
		</div>
		
		
		

		<div className="thridp">
		<p>we offer a wide range of flooring services, and high quality installation services at affordable</p>
        <p>prices. The wide of services we offer help our customers get what they need, at the highest</p>
<p>quality possible.</p>




<p>As a respectable flooring contractor our aim is to provide an unparalleled service through our</p>
<p>reliable team completing projects to the highest standards. Our highly skilled team of flooring</p>
<p>specialists will wrong alongside our clients on site to achieve the desired results.</p>
		</div>
		</div>
	
		
			
			
			
			
			
			
			
            
			 
		
	

      <div>
        <br></br>

        <div className="firstp">
          <p>
            we offer a wide range of flooring services, and high quality
            installation services at affordable
          </p>

          <p>
            prices.The wide of services we offer help our customers get what
            they need, at the highest
          </p>
          <br></br>
        </div>

        <h1>Luxury Vinyl</h1>

        <p>
          Luxury vinyl is one of the most durable flooring options out there. it
          can
        </p>
        <p>
          withstand water and moisture, as well as wear and tear. It is also
          stain and
        </p>
        <p>
          scratch resistant. This durability makes it an ideal flooring option.
        </p>
      </div>
    </div>
  );
};

export default Services;
