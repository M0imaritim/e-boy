# Nairobi Errands Express 🚀

![Project Screenshot](/public/Screenshot.png) <!-- Add your screenshot path -->

A modern web platform connecting busy Nairobi residents with reliable errand runners. Save time, avoid traffic, and get things done!

## Features ✨

- **Service Booking**: Instant WhatsApp connection for errand requests
- **Interactive Carousel**: Smooth animated showcase of services
- **Dark/Light Mode**: Automatic system preference detection
- **Responsive Design**: Works perfectly on all devices
- **Quick Contact**: One-click access to support

## Technologies Used 🛠️

- **Frontend**:
  - Next.js 13 (App Router)
  - TypeScript
  - Tailwind CSS
  - Swiper.js (for animated carousel)
- **Deployment**:
  - Vercel
  - GitHub Actions (CI/CD)

## Getting Started 🚀

### Prerequisites

- Node.js v18+
- npm/yarn
- WhatsApp Business account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/M0imaritim/e-boy.git
   Install dependencies:
   ```

bash
npm install

# or

yarn install
Create .env.local file:

env
NEXT_PUBLIC_WHATSAPP_NUMBER=254712345678
NEXT_PUBLIC_BUSINESS_NAME="Nairobi Errands Express"
Running Locally
bash
npm run dev

# or

yarn dev
Open http://localhost:3000 in your browser.

Project Structure 📁
├── public/ # Static assets
│ ├── images/ # All visual assets
│ └── gifs/ # Animated carousel content
├── src/
│ ├── app/ # Next.js 13+ app router
│ ├── components/ # Reusable components
│ │ ├── WhatsAppButton.tsx
│ │ └── AnimatedCarousel.tsx
│ ├── styles/ # Global styles
│ └── utils/ # Helper functions
├── next.config.js # Next.js configuration
└── tailwind.config.js # Tailwind configuration
Configuration ⚙️
Customize in tailwind.config.js:

js
theme: {
extend: {
colors: {
primary: {
DEFAULT: '#059669', // Emerald-600
dark: '#047857' // Emerald-700
}
}
}
}
Deployment 🚀
Push to GitHub:

bash
git push origin main
Connect your Vercel account to the repository

Set environment variables in Vercel dashboard

Deploy!

Deploy with Vercel

Contact 📞
For inquiries or support:

Email: moimaritim@gmail.com

WhatsApp: +254 717 782 277

License 📜
This project is licensed under the MIT License - see the LICENSE file for details.

<p align="center"> Made with ❤️ in Nairobi | © 2023 Nairobi Errands Express </p> ```
