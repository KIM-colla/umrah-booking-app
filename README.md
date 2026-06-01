# Book My Umrah - Umrah Trip Booking Application

A modern, responsive frontend application for booking Umrah (Islamic pilgrimage) packages. Built with React, this app features a complete user interface for browsing, selecting, and booking Umrah packages.

## 🌟 Features

### 🏠 Home Page
- Hero section with search functionality
- Featured packages showcase
- "Why Choose Us" section highlighting benefits
- Customer testimonials
- Call-to-action buttons

### 📦 Package Management
- Browse all available Umrah packages
- Advanced filtering by:
  - Search term
  - Travel month
  - Package duration
  - Price range
- Detailed package information
- Package comparison

### 🛒 Booking System
- Add packages to cart
- Quantity selection
- Order summary
- Multi-step booking form with:
  - Personal information
  - Contact details
  - Address information
  - Passport details
  - Payment method selection
- Booking confirmation page

### 👤 User Profile
- User authentication (Login/Sign up)
- Profile management
- My bookings section
- Account settings
- Logout functionality

### 🎨 User Interface
- Fully responsive design (mobile, tablet, desktop)
- Modern gradient color scheme
- Smooth animations and transitions
- Intuitive navigation
- Sticky navigation bar
- Professional footer with links

## 🛠️ Tech Stack

- **React 18.2.0** - UI library
- **React Router DOM 6.14.0** - Client-side routing
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Programming language

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/KIM-colla/umrah-booking-app.git
cd umrah-booking-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
umrah-booking-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js       # Top navigation bar
│   │   ├── Navigation.css
│   │   ├── Footer.js           # Footer component
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js             # Home page
│   │   ├── Home.css
│   │   ├── Packages.js         # Packages listing
│   │   ├── Packages.css
│   │   ├── PackageDetail.js    # Package details page
│   │   ├── PackageDetail.css
│   │   ├── Booking.js          # Booking form page
│   │   ├── Booking.css
│   │   ├── Profile.js          # User profile/auth
│   │   └── Profile.css
│   ├── App.js                  # Main app component
│   ├── App.css
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json
└── README.md
```

## 🌐 Available Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with featured packages |
| `/packages` | Packages | Browse all packages with filters |
| `/package/:id` | Package Detail | View package details and book |
| `/booking` | Booking | Complete booking form |
| `/profile` | Profile | User authentication and profile |

## 💡 Features in Detail

### Search & Filter
Users can search packages by:
- Package name
- Travel month
- Duration (5-7 days, 8-10 days, 11-14 days, 15+ days)
- Price range

### Package Details
Each package includes:
- Detailed description
- Daily itinerary breakdown
- Included services checklist
- Pricing information
- Quantity selector
- Add to cart functionality
- Booking information

### Booking Process
1. **Add to Cart** - Select quantity and add package
2. **Review Cart** - View selected packages on booking page
3. **Fill Form** - Enter personal and contact information
4. **Address & Passport** - Provide travel details
5. **Payment Method** - Select payment option
6. **Confirm** - Complete booking and receive confirmation

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Touch-friendly interface
- Optimized for all devices

## 🎨 Customization

### Change Package Data
Edit package data in:
- `src/pages/Home.js` - Featured packages
- `src/pages/Packages.js` - All packages list
- `src/pages/PackageDetail.js` - Package details

### Change Colors
Modify gradient colors in CSS files:
- Primary: `#667eea`
- Secondary: `#764ba2`

### Update Company Info
Edit footer content in `src/components/Footer.js`

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] Database for storing bookings
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] Email notifications and confirmations
- [ ] User dashboard with booking history
- [ ] Admin panel for package management
- [ ] Reviews and ratings system
- [ ] Live chat support
- [ ] Multi-language support (Arabic, English, Urdu)
- [ ] Testimonials management
- [ ] Newsletter subscription
- [ ] Blog section

## 📝 License

This project is open source and available under the MIT License.

## 📧 Support

For support, please contact: info@bookmyumrah.com

## 👨‍💻 Author

Created by **KIM-colla**

---

## 📌 Important Notes

**This is a frontend-only application.** For production use, you'll need to:
1. Set up a backend API (Node.js, Python, Java, etc.)
2. Implement a database (MongoDB, PostgreSQL, MySQL, etc.)
3. Integrate payment gateway
4. Set up email service
5. Implement user authentication with JWT or OAuth
6. Deploy on a hosting platform

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

If you find any bugs, please open an issue on GitHub with details about the problem.

---

**Happy Booking!** 🕌✨
