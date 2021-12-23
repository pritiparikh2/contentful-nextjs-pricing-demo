import XDHeader from './xdHeader';
import XDHeroImage from './xdHeroImage';
import XDSetOfCard from './xdSetOfCard';
import XDSectionWithImage from './xdSectionWithImage';
import XDBanner from './xdBanner';
import XDSetOfTestimonialCards  from './xdSetOfTestimonialCards';
import XDSetOfTeamMembers from './xdSetOfTeamMembers';

export default function Section ({sectionType, section, ArrayKey, sys}) {
    //console.log(section);
    const renderSection = () => {
        switch (sectionType) {
          case 'xdHeader':
            return (<XDHeader entry={section.fields} /> )
          case 'xdHeroImage':
            return ( <XDHeroImage entry={section.fields} /> )
          case 'xdSetOfCard':
            return ( <XDSetOfCard entry={section.fields} /> )
          case 'xdSectionWithImage':
            return ( <XDSectionWithImage entry={section.fields} /> )
          case 'xdBanner':
            return ( <XDBanner entry={section.fields} /> )
          case 'xdSetOfTestimonialCards':
            return ( <XDSetOfTestimonialCards entry={section.fields} /> )
          case 'xdSetOfTeamMembers':
            return ( <XDSetOfTeamMembers entry={section.entry} /> )
          default:
            console.log("Section type not found: " + sectionType);
            return ( <div data-content-type='not-found'>Illegal Section Type</div> )
        }
      }

    return (
      <div  className='w-screen'>
       {renderSection()}
      </div>
    )
}