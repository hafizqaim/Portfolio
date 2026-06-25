// Core identity + contact. Everything here is sourced from the GitHub profile
// (github.com/hafizqaim) and confirmed by Qaim. Edit freely.

export const profile = {
  name: 'Muhammad Qaim Ali',
  handle: 'hafizqaim',
  role: 'AI / ML Engineer',
  tagline: 'I build AI systems that see, reason, and ship.',
  location: 'Islamabad, Pakistan',
  workMode: 'On-site / Remote',
  education: 'FAST-NUCES · B.S. AI',
  status: 'Open to AI / ML Engineer roles',
  available: true,

  lede:
    'AI/ML Engineer delivering production-grade systems across healthcare, manufacturing, and automation — from a 3D model that drafts MRI reports to multi-tenant ML APIs and end-to-end pipelines deployed on AWS.',

  bio: [
    "I'm **Muhammad Qaim Ali**, an AI & Machine Learning Engineer based in Islamabad and a final-year **B.S. Artificial Intelligence** student at **FAST-NUCES**. I like the part of this field where research ideas have to survive contact with real systems — where a model isn't done until it's served, evaluated, and useful to someone.",
    "My flagship project, **PAB MRI**, is a 3D vision-language model that turns raw MRI scans into structured clinical reports, fine-tuned with **LoRA** over a 4,000+ scan dataset inside a full MLOps workflow. Alongside it I've shipped an **Intelligent Clinic System** — a multi-tenant healthcare API pairing RAG with anomaly detection — plus computer-vision systems for manufacturing defect and workplace-safety detection.",
    "I sharpened my retrieval and vector-database skills as an **ML Intern at Arbisoft**, where I migrated a knowledge base from Neo4j to Qdrant to cut query latency. I've also delivered **100+ five-star projects** on Fiverr, and I'm comfortable across the full ML lifecycle: from notebooks to **Dockerised, Airflow-orchestrated, CI/CD-driven services on AWS**.",
    "I'm currently open to **Machine Learning / AI Engineer** roles — on-site in Islamabad or remote anywhere.",
  ],

  // Drop a real screenshot/photo here if you want; otherwise the animated
  // viewport renders in the hero.
  links: {
    github: 'https://github.com/hafizqaim',
    linkedin: 'https://www.linkedin.com/in/qaimali-ai',
    linktree: 'https://linktr.ee/mqaimali',
    email: 'researchtycoons@gmail.com',
  },

  // CV PDF lives in /public. The Resume buttons serve this file.
  resumeUrl: './Muhammad%20Qaim%20Ali%20Resume.pdf',

  stats: [
    { n: '100+ · 5★', l: 'Fiverr projects delivered' },
    { n: "Dean's List", l: 'FAST-NUCES · 7th & 8th sem' },
    { n: 'Silver Medal', l: '1st semester, AI' },
  ],

  focus: [
    { k: '01 — Medical AI', v: 'Imaging & Reports', d: '3D vision-language & DICOM pipelines for healthcare.' },
    { k: '02 — Vision', v: 'Computer Vision', d: 'Detection & classification with YOLOv8, ResNet, OpenCV.' },
    { k: '03 — Retrieval', v: 'RAG & LLMs', d: 'Grounded answers over Qdrant / pgvector with LangChain.' },
    { k: '04 — MLOps', v: 'Pipelines & APIs', d: 'MLflow, DVC, Airflow, Docker & FastAPI on AWS.' },
  ],
}
