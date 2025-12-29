# Food Panda Landing Page Clone

A modern, responsive clone of the Food Panda corporate website featuring two main pages: the main homepage and a dedicated Panda Ads marketing page. This project demonstrates advanced HTML5, CSS3, and vanilla JavaScript skills with smooth animations, responsive design, and interactive elements.

## Project Overview

This assignment is a pixel-perfect recreation of the Food Panda landing pages, showcasing professional web development practices including:

- Responsive design across all device sizes
- Smooth scroll animations and transitions
- Interactive UI components
- Modern CSS layouts (Flexbox & Grid)
- Clean, semantic HTML5 structure
- Vanilla JavaScript for interactivity

## Features

### Main Landing Page (`index.html`)

1. **Hero Section with Video Background**
   - Full-width autoplay video background
   - Overlay for text readability
   - Animated heading with slide-up fade effect

2. **Mission Statement Section**
   - Bold typography highlighting Food Panda's mission
   - Clean, centered layout

3. **Feature Showcase**
   - Split-screen layout (image + text)
   - Rounded image styling
   - Call-to-action buttons

4. **App Download Section**
   - Multiple app store badges (Apple, Google Play, Huawei)
   - Responsive image layout
   - Direct download links

5. **Careers Section**
   - Engaging "Join us" content
   - Professional imagery
   - Clear call-to-action

6. **News Carousel**
   - Horizontal scrollable news cards
   - Drag-to-scroll functionality
   - Gradient overlays for text readability
   - Date and category tags

7. **Business Solutions Section**
   - Corporate food delivery information
   - Split layout design

8. **Footer**
   - Dark theme with multiple navigation columns
   - Social media links (Facebook, LinkedIn, Instagram)
   - Copyright information
   - Back-to-top button

### Panda Ads Page (`Components/ads.html`)

1. **Hero Section**
   - Black background with bold typography
   - Split layout (text + image)
   - "Get in touch" CTA button

2. **Stats Section**
   - Animated counters using Intersection Observer API
   - 125M app downloads
   - 11 markets
   - 400+ cities

3. **Benefits Section**
   - Three-column grid layout
   - Icon-based benefits display
   - Centered content alignment

4. **Advertising Solutions**
   - In-app advertising showcase
   - Off-app advertising options
   - Strategic partnerships section
   - Advanced targeting comparison

5. **Case Studies (Impact Section)**
   - Three featured case studies (Coca-Cola, Mars Wrigley, Amazon Prime)
   - Image cards with "Read more" buttons
   - Hover effects

6. **Testimonials**
   - Three client testimonials with quotes
   - Client information and company logos
   - Professional layout

7. **Brand Showcase**
   - Grid of 16 partner brands
   - Responsive grid (8 columns on desktop, 2 on mobile)
   - Major brands: Amazon, Netflix, Samsung, Coca-Cola, etc.

8. **Final CTA**
   - Prominent call-to-action section
   - Pink-themed design matching brand colors

## Technologies Used

### HTML5
- Semantic markup
- Proper document structure
- Accessible navigation

### CSS3
- **Custom Properties** (CSS Variables)
  - `--primary-pink: #d70f64`
  - `--text-dark: #333333`
  - `--nav-height: 70px`

- **Advanced Layouts**
  - Flexbox for navigation and sections
  - CSS Grid for card layouts and brand showcase
  - Responsive design with mobile-first approach

- **Animations & Transitions**
  - `@keyframes slideUpFade` for hero text
  - Smooth hover transitions
  - Transform effects on buttons and cards

- **Responsive Design**
  - Breakpoints:
    - Extra Small: `max-width: 479px`
    - Small: `480px - 767px`
    - Medium: `768px - 991px`
    - Large: `992px - 1199px`
    - Extra Large: `1200px+`

### JavaScript
- **Intersection Observer API** for scroll animations
- **Counter Animation** for statistics
- **Carousel Functionality** for news section
- **Smooth Scrolling** back-to-top button
- **Event Listeners** for interactive elements

### External Libraries
- **Google Fonts**: Poppins (400, 600, 700 weights)
- **Font Awesome 6.0.0**: Icons for UI elements

## File Structure

```
Food-Panda-landingPage-Clone/
│
├── index.html                          # Main landing page
├── README.md                           # Project documentation
│
├── Components/
│   └── ads.html                        # Panda Ads marketing page
│
├── assests/
│   ├── CSS/
│   │   ├── style.css                   # Main stylesheet (694 lines)
│   │   ├── ads.css                     # Panda Ads specific styles (708 lines)
│   │   └── responsive.css              # Responsive design rules (1152 lines)
│   │
│   ├── JAVASCRIT/
│   │   └── ads.js                      # Statistics counter & interactions
│   │
│   ├── video/
│   │   └── Home - foodpanda...mp4      # Hero background video
│   │
│   ├── foodpanda-images/               # Main page images (40+ images)
│   │   ├── food-panda-logo.png
│   │   ├── generation of delivery.jpeg
│   │   └── ...
│   │
│   └── ads-panda-images/               # Panda Ads page images
│       ├── speaker.jpeg
│       ├── bag.jpeg
│       ├── coca.jpeg
│       └── ...
│
└── .git/                               # Git repository
```

## Color Scheme

| Color Name      | Hex Code  | Usage                          |
|-----------------|-----------|--------------------------------|
| Primary Pink    | `#d70f64` | Buttons, links, brand elements |
| Bright Pink     | `#ff2b85` | Panda Ads branding, accents    |
| Dark Pink Hover | `#b50b53` | Button hover states            |
| Text Dark       | `#333333` | Primary text color             |
| Light Gray      | `#f7f7f7` | Background color               |
| White           | `#ffffff` | Section backgrounds            |
| Black           | `#000000` | Footer, Ads hero section       |

## Key Design Patterns

### 1. Sticky Navigation
```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

### 2. Video Background Implementation
```html
<video autoplay muted loop playsinline class="back-video">
  <source src="video.mp4" type="video/mp4">
</video>
```

### 3. Intersection Observer for Animations
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show-element');
    }
  });
});
```

### 4. Counter Animation
```javascript
const updateCount = () => {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  const inc = target / speed;

  if (count < target) {
    counter.innerText = Math.ceil(count + inc);
    setTimeout(updateCount, 1);
  }
};
```

## Responsive Design Highlights

### Mobile (< 480px)
- Hamburger menu (hidden navigation links)
- Stacked layouts
- Reduced font sizes
- Single column grids
- Full-width buttons

### Tablet (768px - 991px)
- Two-column layouts
- Adjusted spacing
- Medium font sizes
- Flexible grids (2-3 columns)

### Desktop (1200px+)
- Full navigation menu
- Multi-column layouts
- Large hero sections
- Grid layouts (4-8 columns)
- Optimal spacing and typography

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

1. **CSS Optimization**
   - Separate responsive stylesheet for better organization
   - CSS custom properties for consistency
   - Efficient selectors

2. **Image Handling**
   - Proper image sizing
   - `object-fit: cover` for video/images
   - Lazy loading considerations

3. **JavaScript**
   - Vanilla JS (no heavy frameworks)
   - Event delegation where applicable
   - Intersection Observer for efficient scroll detection

## Animations & Interactions

### Scroll Animations
- Elements fade in and slide up when scrolling into view
- Smooth transitions using CSS `transition` property
- Observer-based triggering for performance

### Hover Effects
- Button color changes
- Card lift effects (`transform: translateY(-5px)`)
- Icon scaling
- Link color transitions

### Carousel
- Horizontal scroll with mouse drag
- Smooth scroll behavior
- Custom scrollbar hidden for clean look

## Installation & Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd Food-Panda-landingPage-Clone
```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

3. **Local Server (Optional)**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with http-server
npx http-server
```

4. **Navigate to**
   - Main Page: `http://localhost:8000/index.html`
   - Ads Page: `http://localhost:8000/Components/ads.html`

## Usage

### Navigation
- Click navigation links to explore sections
- Use "Choose location" button for location-based features
- Search icon for search functionality (placeholder)

### Interactive Elements
- Scroll to trigger animations
- Drag the news carousel horizontally
- Click "Back to Top" button to return to page top
- Hover over cards and buttons for effects

### Responsive Testing
- Resize browser window to see responsive behavior
- Test on actual mobile devices for best results
- Use browser DevTools for responsive design mode

## Assignment Requirements Met

- Modern, responsive web design
- Clean, semantic HTML structure
- Advanced CSS layouts (Flexbox, Grid)
- Vanilla JavaScript for interactivity
- Multiple pages with consistent design
- Smooth animations and transitions
- Professional footer with navigation
- Mobile-first responsive design
- Cross-browser compatibility
- Git version control

## Future Enhancements

Potential improvements for this project:

1. **Functionality**
   - Add actual search functionality
   - Implement location picker
   - Connect to backend API
   - Add form validation

2. **Performance**
   - Image lazy loading
   - Code splitting
   - Minify CSS/JS
   - Add service worker for PWA

3. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader support
   - Color contrast improvements

4. **Features**
   - Dark mode toggle
   - Multiple language support
   - User authentication
   - Interactive map integration

## Learning Outcomes

This project demonstrates proficiency in:

- HTML5 semantic markup and structure
- CSS3 advanced layouts and animations
- Responsive web design principles
- JavaScript DOM manipulation
- Modern web development practices
- Git version control
- Cross-browser compatibility
- Performance optimization
- UI/UX design implementation

## Credits

- **Original Design**: Food Panda (https://www.foodpanda.com)
- **Developer**: [Your Name]
- **Assignment**: Web Development Course
- **Year**: 2025

## License

This project is created for educational purposes as part of a web development assignment. All rights to the Food Panda brand, logos, and original design belong to Food Panda.

## Contact

For questions or feedback about this project:
- GitHub: [Your GitHub Profile]
- Email: [Your Email]

---

**Note**: This is a student project created for educational purposes. It is not affiliated with or endorsed by Food Panda.
