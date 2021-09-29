import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
<LeftSection>
  <SectionTitle main center>
    Hello <br />
    I'm Dex Coder
  </SectionTitle>
  <SectionText>
  Front End Developer based in Karachi. I specialise in creating interactive experiences and functional interfaces using React, Redux. 
  </SectionText>
  <Button onClick={() => window.location = 'https://www.linkedin.com/in/mkashif07/'}>Hire Me</Button>
</LeftSection>
  </Section>
);

export default Hero;