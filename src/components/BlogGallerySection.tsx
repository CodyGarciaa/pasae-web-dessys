import { Box } from 'gestalt';
import CaptionPicture from './CaptionPicture';
import type { CaptionPictureCard } from './CaptionPicture';

const BlogGallerySection = () => {
  const blogCards: CaptionPictureCard[] = [
    {
      image: 'https://live.staticflickr.com/1938/44955531295_7c0d1683c7_h.jpg',
      date: 'Thursday, September 05, 2024',
      title: "PASAE'ce Skating 2018",
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
      link: '#'
    },
    {
      image: 'https://pasae.studentorg.berkeley.edu/images/home2.jpg',
      date: 'Thursday, January 04, 2024',
      title: 'PASAE 30 Banquet',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
      link: '#'
    },
    {
      image: 'https://pasae.studentorg.berkeley.edu/images/faster.jpg',
      date: 'Wednesday, November 08, 2023',
      title: 'FASTERcon 2018',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
      link: '#'
    },
    {
      image: 'https://pasae.studentorg.berkeley.edu/images/techpanel_fa22.jpg',
      date: 'Monday, March 21, 2022',
      title: 'Tech Panel Fall 2022',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
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