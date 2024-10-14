# TranquillHomes

TranquillHomes is a web-based platform that allows users to list and find rental homes, inspired by Airbnb. It integrates features like cloud-based image storage, interactive maps, and star ratings for listings.

## Tech Stack

- **JavaScript**: Core logic and backend functionality.
- **EJS**: For templating and dynamically rendering content on the server.
- **MongoDB**: Database for storing user, listing, and review data.
- **HTML & CSS**: Frontend structure and styling.
- **React**: Used for specific interactive components.
- **Cloudinary**: For cloud-based image uploads and storage.
- **Render.com**: Hosting and deployment platform.

## Features

- **Listings**: Users can create, view, and manage listings.
- **Star Ratings**: Integrated CSS-based star rating system for user reviews.
- **Image Upload with Preview**: Real-time image preview before uploading using Cloudinary.
- **Map Integration**: Interactive maps using Mapbox, with location markers for each listing.
- **Responsive Design**: Mobile and desktop-friendly UI.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB (local or cloud instance)
- Cloudinary account for image storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tranquillhomes.git
   cd tranquillhomes
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your credentials:

   ```bash
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   DATABASE_URL=your_mongodb_url
   ```

4. Run the application:

   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` to access the platform locally.

## Deployment

The project is deployed on [Render.com](https://render.com). To deploy your own version:

1. Push your code to a GitHub repository.
2. Link your GitHub repo to Render.com.
3. Set environment variables in Render settings as defined in your `.env` file.
4. Start your deployment.

## Contributions

Feel free to fork this project, submit issues, or create pull requests. Any contribution to improve the platform is welcome!

## License

This project is licensed under the MIT License.

