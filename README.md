![Project Screenshot](/public/Screenshot.png)

A modern web platform connecting busy Nairobi residents with reliable errand runners. Save time, avoid traffic, and get things done!

[**Live Demo**](https://swiftaf-errands.vercel.app)

Features ✨
Service Booking: Instant WhatsApp connection for errand requests

Interactive Carousel: Smooth animated showcase of services

Dark/Light Mode: Automatic system preference detection

Responsive Design: Works perfectly on all devices

Quick Contact: One-click access to support

Technologies Used 🛠️
Frontend:
Next.js 13 (App Router)

TypeScript

Tailwind CSS

Swiper.js (for animated carousel)

Deployment:
Vercel

GitHub Actions (CI/CD)

Getting Started 🚀
Prerequisites
Node.js v18+

npm/yarn

WhatsApp Business account

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/M0imaritim/e-boy.git
Install dependencies:

bash
Copy
Edit
npm install

# or

yarn install
Create .env.local file in the root of the project with the following content:

env
Copy
Edit
NEXT_PUBLIC_WHATSAPP_NUMBER=254712345678
NEXT_PUBLIC_BUSINESS_NAME="Nairobi Errands Express"
Run the project locally:

bash
Copy
Edit
npm run dev

# or

yarn dev
Open http://localhost:3000 in your browser.

Project Structure 📁
ruby
Copy
Edit
├── public/ # Static assets
│ ├── Screenshot.png # Project screenshot
│ ├── images/ # All visual images
│ └── gifs/ # Carousel GIFs
├── src/
│ ├── app/ # Next.js App Router
│ ├── components/ # Reusable UI components
│ │ ├── WhatsAppButton.tsx
│ │ └── AnimatedCarousel.tsx
│ ├── styles/ # Tailwind and global styles
│ └── utils/ # Utility functions
├── .env.local # Environment variables
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── README.md # Project documentation
Configuration ⚙️
Customize the colors in tailwind.config.js:

js
Copy
Edit
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
Push changes to GitHub:

bash
Copy
Edit
git push origin main
Connect your Vercel account to the repository and set up deployment.

Set the environment variables in the Vercel dashboard.

Deploy with Vercel.

Contact 📞
For inquiries or support:

Email: moimaritim@gmail.com

WhatsApp: +254 717 782 277

License 📜
This project is licensed under the MIT License. See the LICENSE file for details.

<p align="center"> Made with ❤️ in Nairobi | © 2025 Nairobi Errands Express </p>
