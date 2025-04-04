# CourseGen - AI-Powered Course Generator

## Overview
CourseGen is an innovative AI-powered platform designed to automatically generate comprehensive educational courses. This tool leverages artificial intelligence to create structured, engaging, and personalized learning content for various subjects and skill levels.

## Features
- AI-powered course content generation
- Customizable curriculum structure
- Learning objective-based content organization
- Interactive assessments and quizzes
- Dynamic content adaptation
- Progress tracking and analytics

## Tech Stack

### Backend
- **Python 3.9+**
- **FastAPI** - Modern, fast web framework for building APIs
- **OpenAI GPT** - For AI-powered content generation
- **SQLAlchemy** - SQL toolkit and ORM
- **PostgreSQL** - Primary database
- **Redis** - Caching and session management

### Frontend
- **React.js** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js** - React framework for production
- **Material-UI** - Component library

### DevOps & Tools
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Poetry** - Python dependency management
- **pytest** - Testing framework
- **Black** - Code formatting
- **ESLint** - JavaScript linting

## Getting Started

### Prerequisites
- Python 3.9 or higher
- Node.js 16 or higher
- PostgreSQL
- Redis

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/CourseGen.git
cd CourseGen
```

2. Install backend dependencies
```bash
poetry install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Set up environment variables
```bash
cp .env.example .env
```

5. Run the application
```bash
# Backend
poetry run uvicorn app.main:app --reload

# Frontend
npm run dev
```

## Contributing
We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any queries or support, please open an issue in the repository.
