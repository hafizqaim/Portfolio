// Curated, hand-written project set. All real — sourced from
// github.com/hafizqaim and confirmed by Qaim.
//
// SCREENSHOTS:
//   By default each card shows GitHub's auto-generated repo card
//   (opengraph.githubassets.com) so every project has a visual immediately.
//   To use your own screenshot, drop an image in /public/images and set
//   `image: './images/your-file.png'` on that project.

const GH = 'https://github.com/hafizqaim'

// Helper: GitHub's social-preview image for a repo (works with no setup).
const ogCard = (repo) => `https://opengraph.githubassets.com/1/hafizqaim/${repo}`

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'medical', label: 'Medical AI' },
  { id: 'vision', label: 'Computer Vision' },
  { id: 'mlops', label: 'MLOps' },
  { id: 'agents', label: 'AI Agents' },
  { id: 'fullstack', label: 'Full-Stack' },
]

export const projects = [
  {
    id: 'pab-mri',
    title: 'PAB MRI',
    category: 'Medical AI · Flagship',
    tags: ['medical'],
    featured: true,
    desc:
      'A 3D vision-language pipeline that converts raw MRI scans into structured clinical narratives, targeting radiologist-level accuracy over a proprietary 4,000+ scan dataset with IRB-compliant DICOM preprocessing. LoRA fine-tuning runs inside a full MLOps workflow (DVC, MLflow) for real-time diagnostic inference.',
    stack: ['PyTorch', 'LoRA / PEFT', 'DICOM', '3D VLM', 'MLflow', 'DVC'],
    // No public repo yet — drop a screenshot at /public/images/pab-mri.png
    image: './images/pab-mri.png',
    github: GH,
    demo: null,
  },
  {
    id: 'intelligent-clinic',
    title: 'Intelligent Clinic System',
    category: 'Healthcare · RAG',
    tags: ['medical', 'fullstack', 'agents'],
    featured: true,
    desc:
      'A production-grade multi-tenant healthcare API with JWT, RBAC, and row-level security. An Isolation Forest trained on 5,000 vital records hit 100% precision/recall, and a RAG pipeline (LLaMA 3 + nomic-embed-text) answers medical queries — containerised with Docker Compose and shipped with 49 automated tests via GitHub Actions CI/CD.',
    stack: ['FastAPI', 'PostgreSQL', 'RAG', 'LLaMA 3', 'Docker', 'AWS'],
    image: ogCard('Intelligent-Clinic-System'),
    github: `${GH}/Intelligent-Clinic-System`,
  },
  {
    id: 'brain-mri-unet',
    title: 'Brain MRI Segmentation (U-Net)',
    category: 'Medical AI · Segmentation',
    tags: ['medical', 'vision'],
    featured: true,
    desc:
      'A U-Net deep-learning pipeline that segments tumour/abnormal regions from brain-MRI scans pixel-by-pixel, producing clean segmentation masks to assist radiological review.',
    stack: ['PyTorch', 'U-Net', 'Segmentation', 'OpenCV'],
    image: ogCard('Brain-MRI-Segmentation-using-Unet'),
    github: `${GH}/Brain-MRI-Segmentation-using-Unet`,
  },
  {
    id: 'yolov8-ppe',
    title: 'Workspace Safety Detection',
    category: 'Computer Vision · YOLOv8',
    tags: ['vision'],
    featured: true,
    desc:
      'A real-time PPE detection model using YOLOv8 to identify safety helmets and vests for workplace monitoring — flagging non-compliance live from a video feed.',
    stack: ['YOLOv8', 'Ultralytics', 'OpenCV', 'Python'],
    image: ogCard('Workspace-Safety-Detection-using-YOLOv8'),
    github: `${GH}/Workspace-Safety-Detection-using-YOLOv8`,
  },
  {
    id: 'resnet-defect',
    title: 'Manufacturing Defect Detection',
    category: 'Computer Vision · ResNet-50',
    tags: ['vision'],
    desc:
      'A ResNet-50 defect-detection system with weighted-loss strategies to handle class imbalance, improving F1-score by 18% over baseline across a full augmentation-to-deployment pipeline.',
    stack: ['PyTorch', 'ResNet-50', 'Weighted Loss', 'Computer Vision'],
    image: ogCard('Manufacturing-Defect-Detection-System-using-ResNet-50'),
    github: `${GH}/Manufacturing-Defect-Detection-System-using-ResNet-50`,
  },
  {
    id: 'churn-mlops',
    title: 'ChurnOps — End-to-End MLOps',
    category: 'MLOps · Pipeline',
    tags: ['mlops'],
    featured: true,
    desc:
      'A full MLOps pipeline for customer-churn prediction: DVC-tracked data, Airflow-orchestrated training, Dockerised train/serve containers, GitHub Actions CI/CD, and a FastAPI inference service deployed on AWS EC2.',
    stack: ['Airflow', 'DVC', 'Docker', 'GitHub Actions', 'FastAPI', 'AWS EC2'],
    image: ogCard('Churn-Ops-End-to-End-MLOps-Pipeline-for-Customer-Churn-Prediction'),
    github: `${GH}/Churn-Ops-End-to-End-MLOps-Pipeline-for-Customer-Churn-Prediction`,
  },
  {
    id: 'ai-grader',
    title: 'AI Grader Agent',
    category: 'AI Agent · EdTech',
    tags: ['agents', 'fullstack'],
    featured: true,
    desc:
      'An AI assignment grader: upload a rubric and up to 30 student PDFs/DOCX, and Claude evaluates each submission in parallel, returning colour-coded grades, per-criterion feedback, and exportable DOCX reports.',
    stack: ['React', 'Node / Express', 'Claude', 'pdf-parse', 'docx'],
    image: ogCard('AI-Grader-Agent'),
    github: `${GH}/AI-Grader-Agent`,
  },
  {
    id: 'job-apply-agent',
    title: 'Job-Apply Agent',
    category: 'AI Agent · Automation',
    tags: ['agents'],
    desc:
      'An end-to-end job-application agent on a free-tier stack: Google Apps Script ingests Gmail & Sheets, a local Llama 3.1 (or Gemini) drafts responses, and a human-in-the-loop digest keeps me in control before anything is submitted.',
    stack: ['Apps Script', 'Ollama', 'Llama 3.1', 'Gemini'],
    image: './images/job-apply-agent.png',
    github: GH,
  },
  {
    id: 'malware-detection',
    title: 'Malware Detection in Files',
    category: 'ML · Security',
    tags: ['mlops'],
    desc:
      'A gradient-boosted classifier that flags malicious files from extracted static features, comparing XGBoost and LightGBM with feature engineering and tuning for high-precision detection.',
    stack: ['XGBoost', 'LightGBM', 'scikit-learn', 'pandas'],
    image: ogCard('Malware-Detection-in-Files-using-XGBoost-and-LightGBM'),
    github: `${GH}/Malware-Detection-in-Files-using-XGBoost-and-LightGBM`,
  },
  {
    id: 'cloud-book-review',
    title: 'Cloud Book Review App',
    category: 'Full-Stack · DevOps',
    tags: ['fullstack', 'mlops'],
    desc:
      'A three-tier book-review platform built to exercise modern DevOps: Next.js + Node/Express + MySQL, containerised with Docker & Kubernetes, provisioned via Terraform/Ansible, and shipped through Azure Pipelines to AWS/Azure.',
    stack: ['Next.js', 'Express', 'MySQL', 'Kubernetes', 'Terraform', 'Azure'],
    image: ogCard('Cloud-Book-Review-App'),
    github: `${GH}/Cloud-Book-Review-App`,
  },
  {
    id: 'news-reco',
    title: 'News Filtering & Recommendation',
    category: 'ML · Recommender',
    tags: ['mlops'],
    desc:
      'A content-based news recommendation system that preprocesses articles and surfaces relevant stories per user — covering the dataset, preprocessing, and recommender stages end to end.',
    stack: ['Python', 'scikit-learn', 'NLP', 'pandas'],
    image: ogCard('News-Filtering-Recommendation-System'),
    github: `${GH}/News-Filtering-Recommendation-System`,
  },
  {
    id: 'chennai-house',
    title: 'Chennai House Price Prediction',
    category: 'ML · Regression',
    tags: ['mlops'],
    desc:
      'A regression model that predicts Chennai property values from area, footage, location, and quality features — with EDA, feature engineering, and model comparison.',
    stack: ['scikit-learn', 'pandas', 'Regression', 'EDA'],
    image: ogCard('Chennai-House-Price-Prediction-ML-Project'),
    github: `${GH}/Chennai-House-Price-Prediction-ML-Project`,
  },
  {
    id: 'sudoku-ai',
    title: 'Sudoku Solver (AC-3 + Backtracking)',
    category: 'AI · CSP',
    tags: ['vision'],
    desc:
      'A classic-AI Sudoku solver framing the puzzle as a constraint-satisfaction problem — AC-3 constraint propagation plus backtracking search, wrapped in an interactive GUI.',
    stack: ['Python', 'AC-3', 'Backtracking', 'GUI'],
    image: ogCard('Suduko-Game-using-AC3-and-Back-Propagation-Algos-with-GUI'),
    github: `${GH}/Suduko-Game-using-AC3-and-Back-Propagation-Algos-with-GUI`,
  },
  {
    id: 'instagram-tracker',
    title: 'Instagram Unfollower Tracker',
    category: 'Tool · Desktop',
    tags: ['fullstack'],
    desc:
      'A desktop app that parses your Instagram data export to show exactly who does not follow you back — a tidy, privacy-friendly utility with no API scraping.',
    stack: ['Python', 'Desktop GUI', 'Data Parsing'],
    image: ogCard('instagram-unfollower-tracker'),
    github: `${GH}/instagram-unfollower-tracker`,
  },
]
