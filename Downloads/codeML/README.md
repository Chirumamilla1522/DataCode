# DataCode

A comprehensive LeetCode-style platform for ML/AI learning and practice, deployed on Vercel.

## Features

- **Coding Challenges**: Practice ML fundamentals, Deep Learning, and Gen AI/LLMs/MLOps
- **Research Integration**: Access to state-of-the-art research papers and talks
- **Cloud Services**: Integration with various cloud platforms
- **Learning Ecosystem**: Complete educational content for ML/AI enthusiasts

## Project Structure

```
DataCode/
├── api/                 # Vercel serverless functions
│   └── server.js       # Express API server
├── public/             # Static files
├── src/                # React/TypeScript source code
│   ├── App.tsx         # Main React component
│   ├── App.css         # Styling
│   ├── index.tsx       # Entry point
│   ├── index.css       # Global styles
│   └── utils/
│       └── clearDemoData.ts  # Utility functions
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Chirumamilla1522/DataCode.git
cd DataCode
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Vercel Deployment

This project is configured for automatic deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration and deploy
3. The API will be available at `/api/*` endpoints
4. The frontend will be served from the root

## API Endpoints

- `GET /api/problems` - Get ML problems list
- `GET /api/health` - Health check endpoint

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [@Chirumamilla1522](https://github.com/Chirumamilla1522) 