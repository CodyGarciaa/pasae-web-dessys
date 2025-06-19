import { Box } from 'gestalt';
import CaptionPicture from './CaptionPicture';
import type { CaptionPictureCard } from './CaptionPicture';

const BlogGallerySection = () => {
  const blogCards: CaptionPictureCard[] = [
    {
      image: 'https://live.staticflickr.com/1938/44955531295_7c0d1683c7_h.jpg',
      date: 'Thursday, September 05, 2024',
      title: "PASAE'ce Skating 2018",
      desc: 'Managers from our European Sales team are sharing what makes being a Pinterest employee so special. Meet Ayten Ates and Martin Holzberg, and learn more about joining Life at Pinterest.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      date: 'Thursday, January 04, 2024',
      title: 'Getting your resume apprenticeship-ready',
      desc: 'Get your resume apprenticeship-ready with this guide prepared by Pinterest\'s Apprenticeship Recruiting Team with bonus tips from hiring managers and recruiters.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      date: 'Wednesday, November 08, 2023',
      title: 'Pinterview Pro: Machine Learning',
      desc: 'Become a Machine Learning Pinterview Pro with this exclusive guide from members of our Talent Acquisition team. They\'ll share their favorite pieces of advice and recommendations for your interview prep and learning journey.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      date: 'Monday, March 21, 2022',
      title: 'Calibrating your career compass: How to navigate the interview process',
      desc: 'The global pandemic brought many changes to how we live and work in the last two years. It also provided an opportunity for people to assess what\'s important to them, and introduced new phrases to our dictionaries.',
      link: '#'
    }
  ];

  return (
    <Box marginTop={12}>
      <CaptionPicture
        heading="Lots of Opportunities!"
        buttonText="Join and Support Today"
        cards={blogCards}
      />
    </Box>
  );
};

export default BlogGallerySection; 