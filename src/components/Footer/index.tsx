import React from 'react';
import { Wrapper } from './styles';
import TW from '../../assets/twitter.svg';
import UP from '../../assets/upwork.svg';
import GH from '../../assets/github.svg';
import LI from '../../assets/linkedin.svg';

const Footer: React.FC = () => {
	return (
		<Wrapper>
			<p>
				<a href='https://www.linkedin.com/in/hiren1903/' target='_blank' rel='noopener noreferrer'>
					Hiren Patel
				</a>{' '}
				&copy; {new Date().getFullYear()}
			</p>
			<div className='contact'>
				<a href='https://github.com/hirenpatel1903' target='_blank' rel='noopener noreferrer'>
					<img src={GH} alt='Github' />
				</a>
				<a href='https://www.upwork.com/workwith/hirenp1903' target='_blank' rel='noopener noreferrer'>
					<img src={UP} alt='Upwork' />
				</a>
				<a href='https://www.linkedin.com/in/hiren1903/' target='_blank' rel='noopener noreferrer'>
					<img src={LI} alt='LinkedIn' />
				</a>
			</div>
		</Wrapper>
	);
};

export default Footer;
